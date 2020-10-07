import express from 'express';
import bodyparser from 'body-parser';

import { usersRouter } from './routes/users'

const app = express();

app.use(bodyparser.json());

// CORS
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authentication"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT"
  )
  next();
});


app.use('/api/users', usersRouter);

export { app };
