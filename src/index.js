'use strict'

const Koa = require('koa')
const status = require('statuses')

const PORT = 8000

function echo (...args) {
  console.log(...args) // eslint-disable-lint no-console
}

function loggerMiddleware (ctx, next) {
  const message = `${ctx.method} ${ctx.url}`
  const startTimestamp = new Date()
  next()
  echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`)
}

function healthCheckMiddleware (ctx, next) {
  if (ctx.get('user-agent').startsWith('ELB-HealthChecker')) {
    ctx.body = 'OK'
  } else {
    next()
  }
}

function redirectMiddleware (ctx) {
  ctx.status = status('Moved Permanently')
  ctx.redirect(`https://${ctx.hostname}${ctx.path}`)
}

const app = new Koa()

app.use(loggerMiddleware)
app.use(healthCheckMiddleware)
app.use(redirectMiddleware)

function start () {
  echo(`Starting server`)
  return app.listen(PORT, function () {
    echo(`Listening on port ${PORT}`)
  })
}

module.exports = {app, start}
