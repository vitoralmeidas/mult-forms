const mongoose = require("mongoose");

const RecruiterSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    require: [true, "Please provide an email"],
    minLength: 3,
    maxLength: 50,
    // email patterns
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    // create an user with an unique email
    unique: true,
  },

  company: {
    type: String,
    require: [true, "Please provide company name"],
    minLength: 3,
    maxLength: 50,
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    minLength: 6,
  },
});

//validations

//hashing password

//create a JWT

module.exports = mongoose.model("Recruiter", RecruiterSchema);
