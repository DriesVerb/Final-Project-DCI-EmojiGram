const User = require("../models/User");
const Story = require("../models/Story");

// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};

exports.editProfile = (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) throw err.message;
    res.json(doc);
  });
};

exports.myStories = (req, res) => {
  console.log(req.body);
  Story.find((err, data) => {
    if (err) throw err.message;
    res.json(data);
  });
};

exports.followers = (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id, (err, data) => {
    if (err) throw err.message;
    res.json(data.followers);
  });
};
