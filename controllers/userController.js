// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};
