'use strict'

const Koa = require('koa')
const status = require('statuses')

const PORT = 8000

function echo (...args) {
  console.log(...args) // eslint-disable-lint no-console
}

async function loggerMiddleware (ctx, next) {
  const message = `${ctx.method} ${ctx.url}`
  const startTimestamp = new Date()
  await next()
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`)
}

async function redirectMiddleware (ctx) {
  console.log(ctx.get('user-agent'))
  ctx.status = status('Moved Permanently')
  const hostname = ctx.hostname === 'carnesen.com' ? 'www.carnesen.com' : ctx.hostname
  ctx.redirect(`https://${hostname}${ctx.path}`)
}

const app = new Koa()

app.use(loggerMiddleware)
app.use(redirectMiddleware)

function start () {
  echo(`Starting server`)
  return app.listen(PORT, function () {
    echo(`Listening on port ${PORT}`)
  })
}

module.exports = {app, start}
