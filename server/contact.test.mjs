import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactApp } from './contact.mjs';

const valid = { name: 'Visitante', email: 'visitante@example.com', service: 'Desarrollo web', message: 'Quiero conversar sobre un proyecto de desarrollo web.' };
async function withApi(sendMail, run) {
  const app = createContactApp({ user: 'owner@example.com', origins: ['http://localhost:5173'], sendMail });
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const url = `http://127.0.0.1:${server.address().port}/api/contact`;
  const post = (body, origin = 'http://localhost:5173') => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: origin }, body: JSON.stringify(body) });
  try { await run(post); } finally { await new Promise(resolve => server.close(resolve)); }
}
test('envía a la cuenta configurada y usa el remitente como replyTo', async () => {
  let mail;
  await withApi(async value => { mail = value; }, async post => {
    const response = await post({ ...valid, to: 'other@example.com' });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    assert.equal(mail.to, 'owner@example.com');
    assert.equal(mail.from, 'owner@example.com');
    assert.equal(mail.replyTo, valid.email);
    assert.ok(mail.text.includes(valid.message));
  });
});
test('rechaza campos inválidos y orígenes ajenos sin enviar', async () => {
  let sends = 0;
  await withApi(async () => { sends++; }, async post => {
    assert.equal((await post({ ...valid, email: 'x\r\nBcc: other@example.com' })).status, 400);
    assert.equal((await post({ ...valid, message: 'corto' })).status, 400);
    assert.equal((await post(valid, 'https://other.example')).status, 403);
    assert.equal((await post({ ...valid, _honey: 'bot' })).status, 200);
    assert.equal(sends, 0);
  });
});
test('un error SMTP devuelve fallo sin revelar detalles', async () => {
  await withApi(async () => { throw new Error('private SMTP detail'); }, async post => {
    const response = await post(valid);
    assert.equal(response.status, 502);
    assert.ok(!(await response.text()).includes('private SMTP detail'));
  });
});
test('limita solicitudes repetidas', async () => {
  await withApi(async () => {}, async post => {
    for (let i = 0; i < 5; i++) assert.equal((await post(valid)).status, 200);
    assert.equal((await post(valid)).status, 429);
  });
});
