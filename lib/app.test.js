"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = require("statuses");
const app_1 = require("./app");
const request = require('supertest');
describe(__filename, () => {
    it('redirects to www', async () => {
        const res = await request(app_1.app.callback()).get('/user');
        expect(res.status).toEqual(status('Moved Permanently'));
        expect(res.headers.location).toEqual('https://www.127.0.0.1/user');
    });
    it('responds ok on health check', async () => {
        const res = await request(app_1.app.callback()).get('/_ah/start');
        expect(res.status).toEqual(status('OK'));
    });
});
//# sourceMappingURL=app.test.js.map