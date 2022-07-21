const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-error");
const cors = require("cors");
const connectDB = require("./DB/connect");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const recruiterRouter = require("./routes/recruiter");
const auth = require("./middleware/authentication");

app.get("/", (req, res) => {
  res.send("<h1>MULTI-FORM-API</h1>");
});

//middlewares
// deal with posts and put requests
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
//test
app.use("/api/v1/recruiter", recruiterRouter);
// app.use("/api/v1/recruiter", auth, recruiterRouter);

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
