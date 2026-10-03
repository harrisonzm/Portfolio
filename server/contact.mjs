import express from 'express';
import { rateLimit } from 'express-rate-limit';
import nodemailer from 'nodemailer';

export function createContactApp({ sendMail, user, origins }) {
  const app = express();
  app.disable('x-powered-by');
  app.use('/api/contact', (req, res, next) => {
    const origin = req.get('origin');
    if (origin && !origins.includes(origin)) return res.status(403).json({ success: false });
    if (origin) {
      res.set('Access-Control-Allow-Origin', origin);
      res.vary('Origin');
    }
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });
  app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-8', legacyHeaders: false }));
  app.use(express.json({ limit: '16kb' }));
  app.use(express.urlencoded({ extended: false, limit: '16kb' }));
  app.post('/api/contact', async (req, res) => {
    const body = req.body || {};
    const text = (key) => typeof body[key] === 'string' ? body[key].trim() : '';
    if (text('_honey')) return res.json({ success: true });
    const name = text('name'), email = text('email'), service = text('service'), message = text('message');
    if (name.length < 2 || name.length > 100 || email.length > 254 ||
        !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
        !service || service.length > 150 || /[\r\n]/.test(service) ||
        message.length < 20 || message.length > 5000) {
      return res.status(400).json({ success: false, error: 'Revisa los datos del formulario.' });
    }
    try {
      await sendMail({
        from: user,
        to: user,
        replyTo: email,
        subject: `Portafolio | ${service}`,
        text: `Nombre: ${name}\nCorreo: ${email}\nMotivo: ${service}\n\n${message}`,
      });
      res.json({ success: true });
    } catch {
      console.error('No se pudo enviar el mensaje por SMTP.');
      res.status(502).json({ success: false, error: 'No se pudo enviar el mensaje.' });
    }
  });
  app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    res.status(err.status === 413 ? 413 : 400).json({ success: false, error: 'Solicitud inválida.' });
  });
  return app;
}

export function createGmailTransport(user, password) {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass: password.replace(/\s/g, '') },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
}
