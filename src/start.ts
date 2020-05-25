import { app } from './app';
import { echo } from './util';

const PORT = Number(process.env.PORT) || 8000;

export function start(port = PORT) {
  echo(`Starting server`);
  return app.listen(port, () => {
    echo(`Listening on port ${port}`);
  });
}
