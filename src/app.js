const Koa = require('koa');
const status = require('statuses');

const { echo } = require('./util');

function loggerMiddleware(ctx, next) {
  const message = `${ctx.method} ${ctx.url}`;
  const startTimestamp = new Date();
  next();
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
}

// Google Cloud App Engine-specific health check response
function googleCloudAppEngineMiddleware(ctx, next) {
  if (ctx.path === '/_ah/start') {
    ctx.status = status('OK');
  } else {
    next();
  }
}

function redirectMiddleware(ctx) {
  ctx.status = status('Moved Permanently');
  ctx.redirect(`https://www.${ctx.hostname}${ctx.path}`);
}

const app = new Koa();

app.use(loggerMiddleware);
app.use(googleCloudAppEngineMiddleware);
app.use(redirectMiddleware);

module.exports = app;
