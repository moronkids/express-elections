const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = require('./app');

app.use(express.json());
// from app.js
dotenv.config({ path: './config.env' });
const DB = process.env.DB.replace('<DB_PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log('DB connection Successfull');
  });

const { env } = process;
const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
