const Recruiter = require("../models/Recruiter");

const register = async (req, res) => {
  const recruiter = await Recruiter.create({ ...req.body });
  res.status(201).json({ recruiter });
};

const login = async (req, res) => {
  res.json(req.body);
};

module.exports = {
  register,
  login,
};
