const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must be provided"],
  },
  level: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: [true, "email must be provided"],
  },
  github: {
    type: String,
    required: [true, "github must be provided"],
  },
});

module.exports = mongoose.model("User", userSchema);
