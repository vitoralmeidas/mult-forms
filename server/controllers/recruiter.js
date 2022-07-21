const User = require("../models/User");

//url: http://localhost:5000/api/users/${level}

const getCodersUsersStatic = async (req, res) => {
  const params = Number(req.params.id);
  const user = await User.find({ level: params });
  res.status(200).json({ user });
};

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user, nbHits: user.length });
};

module.exports = { getAllUsers, getCodersUsersStatic };
