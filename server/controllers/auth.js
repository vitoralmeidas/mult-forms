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
    return res.status(401).json({ message: "Usuário não encontrado" });
  }

  //compare the password
  const isPasswordCorrect = await recruiter.comparePassword(password);
  if (!isPasswordCorrect) {
    console.log("password incorrect");
    // return res.status(401).json({ message: "Senha incorreta" });
  }
  const token = recruiter.createToken();
  res.status(201).json({ recruiter: { name: recruiter.name }, token });
};

module.exports = {
  register,
  login,
};
