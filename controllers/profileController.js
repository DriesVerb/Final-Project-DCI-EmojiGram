const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.profile = (req, res) => {
  res.render("profile");
};
