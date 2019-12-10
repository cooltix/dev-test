import express from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';
import seedDb from 'utils/seed/seedDb';
import mongoose from './mongoose';
import router from './router';

const mongod = new MongoMemoryServer();
const PORT = process.env.PORT || '8080';

const app = express();
app.set('port', PORT);
app.use(router);

export const start = async () => {
  console.debug('Initializing app...');
  const MONGO_URI = await mongod.getConnectionString();
  await mongoose.connect(MONGO_URI);
  await seedDb();
};

export const stop = async () => {
  console.debug('Disposing app...');
  await mongoose.disconnect();
  await mongod.stop();
};

export default app;
