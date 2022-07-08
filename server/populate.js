require("dotenv").config();

// connect to DB
const connectDB = require("./DB/connect");
// DB's model
const User = require("./models/users");
// dummy data
const jsonUsers = require("./users.json");

// try to connect to DB

const start = async () => {
  try {
    //connect to db
    await connectDB(process.env.MONGO_URI);
    //clear up the db
    await User.deleteMany();
    //filling the db
    await User.create(jsonUsers);
    console.log("Success!");
    // stop the connection
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
