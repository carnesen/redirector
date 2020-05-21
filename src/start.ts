import { app } from './app';
import { echo } from './util';

const PORT = Number(process.env.PORT) || 8000;

export function start() {
  echo(`Starting server`);
  return app.listen(PORT, () => {
    echo(`Listening on port ${PORT}`);
  });
}
