import 'reflect-metadata';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { createConnection, getConnection } from 'typeorm';
import { AuthRouter } from './src/controller/routers/authRouter';
import { UserRouter } from './src/controller/routers/userRouter';
import { tokenVerifier } from './src/controller/tokenUtil';

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Web pages */
app.use(express.static(path.join(__dirname, '../client/public/')));

/** API */
app.use('/api', AuthRouter, UserRouter);

/** 本番ではこうなる */
// app.use('/api', AuthRouter);
// app.use('/api', tokenVerifier, UserRouter);

/** 404 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', '404.html'));
});

app.on('close', () => {
  getConnection().close();
});

const PORT = 5000;
const start = async () => {
  await createConnection();
  app.listen(PORT, () => {
    console.log(`Web Server is running at ${PORT}.`);
  });
};

start();
