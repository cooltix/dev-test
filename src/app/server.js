import http from 'http';
import chalk from 'chalk';
import app, { start as startApp, stop as stopApp } from './app';

const PORT = app.get('port');
const ENV = app.get('env');
const server = http.createServer(app);

const start = async () => {
  console.debug('Starting server...');
  await startApp();
  return new Promise(resolve =>
    server.listen(PORT, () => {
      console.info(
        `${chalk.green('✓')} Server is running at http://localhost:${PORT} in ${ENV} mode`
      );
      return resolve();
    })
  );
};

const stop = async () => {
  console.debug('Stoppping server...');
  await new Promise(resolve => {
    server.close(resolve);
  });
  await stopApp();
};

export default {
  start,
  stop
};
