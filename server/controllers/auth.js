const register = async (req, res) => {
  res.json(req.body);
};

const login = async (req, res) => {
  res.json(req.body);
};

module.exports = {
  register,
  login,
};
