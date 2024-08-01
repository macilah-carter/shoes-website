const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_TOKEN;

const verify = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (!token) {
      return res.status(201).json({ msg: "Access Denied" });
    }
    const decoded = jwt.verify(token, jwt_secret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Token verification error", error);
    return res.status(500).json({ msgt: "Server error" });
  }
};
module.exports = verify;
