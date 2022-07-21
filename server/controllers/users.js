const User = require("../models/User");

const createNewUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
  console.log("POST", req.body);
};

module.exports = { createNewUser };
