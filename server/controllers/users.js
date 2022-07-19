const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user, nbHits: user.length });
};

const getCodersUsersStatic = async (req, res) => {
  const params = Number(req.params.id);
  const user = await User.find({ level: params });
  res.status(200).json({ user });
};

//url: http://localhost:5000/api/users/${level}

const createNewUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
  console.log("POST", req.body);
};

module.exports = { getAllUsers, createNewUser, getCodersUsersStatic };
