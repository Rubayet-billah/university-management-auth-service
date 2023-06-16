import { Server } from 'http';
import mongoose from 'mongoose';
import envObj from '../src/config/index';
import app from './app';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;
async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${envObj.dbUser}:${envObj.dbPass}@cluster0.bhwsqpg.mongodb.net/university-management?retryWrites=true&w=majority`
    );
    server = app.listen(envObj.port, () => {
      console.log(`Example app listening on port ${envObj.port}`);
    });

    console.log('Database connected successfully');
  } catch (error) {
    console.log('Failed to connect Database', error);
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection is detected, closing server', error);
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
