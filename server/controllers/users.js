const User = require("../models/users");

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user, nbHits: user.length });
};

module.exports = { getAllUsers };
