"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const Koa = require("koa");
const status = require("statuses");
const { echo } = require('./util');
const loggerMiddleware = (ctx, next) => {
    const message = `${ctx.method} ${ctx.url}`;
    const startTimestamp = Date.now();
    next();
    echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
};
// Google Cloud App Engine-specific health check response
const googleCloudAppEngineMiddleware = (ctx, next) => {
    if (ctx.path === '/_ah/start') {
        ctx.status = status('OK');
    }
    else {
        next();
    }
};
const redirectMiddleware = (ctx) => {
    ctx.status = status('Moved Permanently');
    ctx.redirect(`https://www.${ctx.hostname}${ctx.path}`);
};
const app = new Koa();
exports.app = app;
app.use(loggerMiddleware);
app.use(googleCloudAppEngineMiddleware);
app.use(redirectMiddleware);
//# sourceMappingURL=app.js.map