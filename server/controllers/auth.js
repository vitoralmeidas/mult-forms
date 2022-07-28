const Recruiter = require("../models/Recruiter");

const register = async (req, res) => {
  console.log(req.body);
  const recruiter = await Recruiter.create({ ...req.body });

  const token = recruiter.createToken();
  res.status(201).json({ recruiter: { name: recruiter.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("ERRO PASSWORD OR EMAIL");
  }

  const recruiter = await Recruiter.findOne({ email });
  console.log(recruiter);

  // check if there is a recruiter
  if (!recruiter) {
    console.log("RECRUITER NOT FOUND");
  }

  //compare the password
  const isPasswordCorrect = await recruiter.comparePassword(password);
  if (!isPasswordCorrect) {
    console.log("password incorrect");
  }

  const token = recruiter.createToken();
  res.status(200).json({ recruiter: { name: recruiter.name }, token });
};

module.exports = {
  register,
  login,
};
