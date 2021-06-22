const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  age: Number,
  location: String,

  avatar: String,


  following: [{
                type: ObjectId,
                ref:'User' }],
  followers: [{
                type: ObjectId,
                ref:'User'}],

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
