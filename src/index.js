import server from 'app/server';

server.start().catch(err => {
  console.error(err);
  process.exit();
});

const gracefulExit = async () => {
  console.info('Shutting down gracefully');
  await server.stop();
  console.info('Exiting...');
  process.exit();
};
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
