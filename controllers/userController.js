const User = require("../models/User");

// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};

// exports.profile("/profile/:user_id", (req, res) => {
//   User.findOne({
//     user: req.params.user_id,
//   });
// });
