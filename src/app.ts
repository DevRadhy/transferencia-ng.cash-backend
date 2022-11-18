import express from 'express';
import { connection } from './database/connection';
import { router } from './routes';

// init ORM
connection.initialize();

const app = express();

app.use(express.json());
app.use(router);

// TODO: Create error handler

export { app };