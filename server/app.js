const express = require("express");
const app = express();
const connectDB = require("./DB/connect");
require("dotenv").config();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
