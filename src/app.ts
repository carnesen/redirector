import Koa = require('koa');
import status = require('statuses');

const { echo } = require('./util');

const loggerMiddleware: Koa.Middleware = (ctx, next) => {
  const message = `${ctx.method} ${ctx.url}`;
  const startTimestamp = Date.now();
  next();
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
};

// Google Cloud App Engine-specific health check response
const googleCloudAppEngineMiddleware: Koa.Middleware = (ctx, next) => {
  if (ctx.path === '/_ah/start') {
    ctx.status = status('OK');
  } else {
    next();
  }
};

const redirectMiddleware: Koa.Middleware = (ctx) => {
  ctx.status = status('Moved Permanently');
  ctx.redirect(`https://www.${ctx.hostname}${ctx.path}`);
};

const app = new Koa();

app.use(loggerMiddleware);
app.use(googleCloudAppEngineMiddleware);
app.use(redirectMiddleware);

export { app };
