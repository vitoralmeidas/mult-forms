const Recruiter = require("../models/Recruiter");

const register = async (req, res) => {
  const recruiter = await Recruiter.create({ ...req.body });
  const token = recruiter.createToken();
  res.status(201).json({ recruiter: { name: recruiter.name }, token });
};

const login = async (req, res) => {
  res.json(req.body);
};

module.exports = {
  register,
  login,
};
