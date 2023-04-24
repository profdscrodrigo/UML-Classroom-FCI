import mongoose from 'mongoose';
import express from 'express';
import path from 'node:path';
import http from 'node:http';
import 'express-async-errors';
import { router } from './routes';

import { errorHandler } from './app/middlewares/errorHandler';
import { Server } from 'socket.io';

const port = 3001;
const app = express();
const server = http.createServer(app);
export const io = new Server(server);

async function start() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017');

    app.use((req, res, next) => {
      res.setHeader('access-control-allow-origin', '*')
        .setHeader('access-control-allow-methods', '*')
        .setHeader('access-control-allow-headers', '*')
        .setHeader('access-control-max-age', 20);
      next();
    });
    app.use(express.json());
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(router);
    app.use(errorHandler);

    server.listen(port, () =>
      console.log(`Running at http://localhost:${port}`
      ));
  } catch (e) {
    console.log(e);
  }
}

start();
