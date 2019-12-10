import { Mongoose } from 'mongoose';
import chalk from 'chalk';

const mongoose = new Mongoose();
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
  const { name, host, port } = mongoose.connection;
  const uri = `mongodb://${host}:${port}/${name}`;
  console.info(`${chalk.green('✓')} Mongoose connected to ${uri}`);
});

mongoose.connection.on('disconnected', () => {
  console.info('Mongoose disconnected.');
});

mongoose.connection.on('error', err => {
  console.warn(`${chalk.red('✗')} Mongoose connection error.`);
  console.error(err);
});

export default mongoose;
