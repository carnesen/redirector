const app = require('./app');
const { echo } = require('./util');

const PORT = Number(process.env.PORT) || 8000;

function start() {
  echo(`Starting server`);
  return app.listen(PORT, () => {
    echo(`Listening on port ${PORT}`);
  });
}

module.exports = start;
