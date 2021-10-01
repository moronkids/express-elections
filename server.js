/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const socket = require("socket.io");
const app = require("./app");

const httpServer = http.createServer(app);

app.use(express.json());
// from app.js
dotenv.config({ path: "./config.env" });
const DB = process.env.DB.replace("<DB_PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log("DB connection Successfull");
  });

const { env } = process;
const port = env.PORT || 5000;
const ser = app.listen(port, () => {
  console.log("running");
});
// testing untuk force push
// const io = socket.listen(ser);
const io = socket(ser, {
  cors: {
    origin: ["http://localhost:3000", "https://bri-link-alpha.vercel.app"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  socket.on("imclient", (arg) => {
    io.emit("imclient", "peli");
  });
});
