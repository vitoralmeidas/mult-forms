const mongoose = require("mongoose");
//require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
//pre -> middleware
RecruiterSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//create a JWT
// Instance Methods
RecruiterSchema.methods.createToken = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

module.exports = mongoose.model("Recruiter", RecruiterSchema);
