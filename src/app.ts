import Koa = require('koa');
import { OK, MOVED_PERMANENTLY } from 'http-status-codes';

import { echo } from './util';

const loggerMiddleware: Koa.Middleware = async (ctx, next) => {
  const message = `${ctx.method} ${ctx.url}`;
  const startTimestamp = Date.now();
  await next();
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
};

// Google Cloud App Engine-specific health check response
const googleCloudAppEngineMiddleware: Koa.Middleware = async (ctx, next) => {
  if (ctx.path === '/_ah/start') {
    ctx.status = OK;
  } else {
    await next();
  }
};

const redirectMiddleware: Koa.Middleware = (ctx) => {
  ctx.status = MOVED_PERMANENTLY;
  ctx.redirect(`https://www.${ctx.hostname}${ctx.path}`);
};

const app = new Koa();

app.use(loggerMiddleware);
app.use(googleCloudAppEngineMiddleware);
app.use(redirectMiddleware);

export { app };
