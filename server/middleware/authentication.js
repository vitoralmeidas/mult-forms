const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;

  // it must start with 'Bearer'
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No Token Provided");
  }

  // get the token
  // 'Bearer <token>'
  const token = authHeader.split(" ")[1];

  try {
    // get the userId and name, by decoding the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // send the userId and name using the 'user' property of req
    // then the next middleware will have access
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new Error("you don't have access");
  }
};

module.exports = auth;
