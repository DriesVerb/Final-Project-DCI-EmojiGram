const User = require("../models/User");

// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};

exports.createProfile = (req, res) => {
  User.findOne(
    {
      user: req.params.user_id,
    },
    (err, data) => {
      res.json(data);
    }
  );
};

exports.editProfile = (req, res) => {
  User.findByIdAndUpdate(
    {
      user: req.params.user_id,
    },
    (err, doc) => {
      res.json(doc);
    }
  );
};
