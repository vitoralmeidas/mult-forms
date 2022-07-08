const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
