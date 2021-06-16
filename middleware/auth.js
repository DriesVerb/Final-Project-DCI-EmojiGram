const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  //send token from the header
  const token = req.header(user - auth - token);

  // if there is no token

  if (!token) {
    return res.status(401).json({ msg: " authorization denied" });
  }

  //validate token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); //payload object will be in the decoded

    //sign the user in the request

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token in not valid " });
  }
};
