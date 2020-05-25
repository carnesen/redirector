import { Server } from 'http';
import { app } from './app';
import { echo } from './util';

const PORT = Number(process.env.PORT) || 8000;

export function start(port = PORT): Server {
  echo(`Starting server`);
  return app.listen(port, () => {
    echo(`Listening on port ${port}`);
  });
}
