const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  age: Number,
  location: String,
  avatar: String,
  followers: [],
  liked: [
    {
      shortStoryId: Number,
      title: String,
      createdBy: String,
    },
  ],
  socialMedia: {},
  createdAt: {
    type: Date,
    default: Date.now,
  },
  facebook_id: String,
  Twitter_id: String,
  github_id: String,
  instagram_id: String,
  instagramActivity: [{}],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
