const User = require("../models/users");

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user, nbHits: user.length });
};

const createNewUser = async (req, res) => {
  res.status(201).json(req.body);
};

module.exports = { getAllUsers, createNewUser };
