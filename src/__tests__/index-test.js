const status = require('statuses')
const request = require('supertest')

const {app, start} = require('../index')

describe(__filename, function () {
  it('starts and stops', async function () {
    const server = start()
    await new Promise(function (resolve, reject) {
      server.on('listening', resolve)
      server.on('error', reject)
    })
    server.close()
  })
  it('redirects', async function () {
    const res = await request(app.callback()).get('/user')
    res.status.should.equal(status('Moved Permanently'))
    res.headers.location.should.equal('https://127.0.0.1/user')
  })
})
