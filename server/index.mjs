import 'dotenv/config';
import { createContactApp, createGmailTransport } from './contact.mjs';

const user = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;
if (!user || !password) {
  console.error('Configura EMAIL_USER y EMAIL_PASSWORD en .env antes de iniciar la API.');
  process.exit(1);
}
const transporter = createGmailTransport(user, password);
const origins = (process.env.CONTACT_ORIGINS || 'http://localhost:5173').split(',').map(value => value.trim()).filter(Boolean);
const app = createContactApp({ user, origins, sendMail: mail => transporter.sendMail(mail) });
app.listen(Number(process.env.PORT || 3001), () => console.log('API de contacto iniciada.'));
