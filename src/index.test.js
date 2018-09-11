const status = require('statuses');
const request = require('supertest');

const { app, start } = require('.');

describe(__filename, () => {
  it('starts and stops', async () => {
    const server = start();
    await new Promise((resolve, reject) => {
      server.on('listening', resolve);
      server.on('error', reject);
    });
    server.close();
  });
  it('redirects', async () => {
    const res = await request(app.callback()).get('/user');
    expect(res.status).toEqual(status('Moved Permanently'));
    expect(res.headers.location).toEqual('https://www.127.0.0.1/user');
  });
});
