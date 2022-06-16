const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = jwt.verify(token, process.env.SecretKey);
    if (!verifyToken) res.status(401).json({ msg: "you are not authorized" });
    req.userID = verifyToken.id;
    req.userRole = verifyToken.role;
    next();
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
module.exports = auth;
