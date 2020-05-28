import { MOVED_PERMANENTLY, OK } from 'http-status-codes';
import { app } from './app';
const request = require('supertest');

describe(__filename, () => {
  it('redirects to www', async () => {
    const res = await request(app.callback()).get('/user');
    expect(res.status).toEqual(MOVED_PERMANENTLY);
    expect(res.headers.location).toEqual('https://www.127.0.0.1/user');
  });
  it('responds ok on health check', async () => {
    const res = await request(app.callback()).get('/_ah/start');
    expect(res.status).toEqual(OK);
  });
});
