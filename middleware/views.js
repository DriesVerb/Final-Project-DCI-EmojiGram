const Story = require("../models/Story");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function (req, res, next) {
  const token = req.header("x-token");
  let story = await Story.findById(req.params.id);

  if (token) {
    const jwtSecret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;

    try {
      if (story.user.toString() !== req.user.id) {
        story.views++;
        story.save();
        next();
      } else {
        next();
      }
    } catch (err) {
      res.status(406).json();
    }
  } else {
    story.views++;
    story.save();
    next();
  }
};
