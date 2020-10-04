const express = require('express');
const bodyparser = require('body-parser');

const usersRoute = require('./routes/users');

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


app.use('/api/users', usersRoute);

module.exports = app;
