const Koa = require('koa');
const status = require('statuses');

const PORT = Number(process.env.port) || 8000;

function echo(...args) {
  console.log(...args); // eslint-disable-lint no-console
}

function loggerMiddleware(ctx, next) {
  const message = `${ctx.method} ${ctx.url}`;
  const startTimestamp = new Date();
  next();
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
}

function redirectMiddleware(ctx) {
  ctx.status = status('Moved Permanently');
  ctx.redirect(`https://www.${ctx.hostname}${ctx.path}`);
}

const app = new Koa();

app.use(loggerMiddleware);
app.use(redirectMiddleware);

function start() {
  echo(`Starting server`);
  return app.listen(PORT, () => {
    echo(`Listening on port ${PORT}`);
  });
}

module.exports = { app, start };
