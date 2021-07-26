const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  age: Number,
  location: String,
  hobby: String,
  occupation: String,
  message: String,

  avatar: String,

<<<<<<< HEAD
=======
  stories: [
    {
      story: {
        type: Schema.Types.ObjectId,

        ref: "Story",
      },
    },
  ],
>>>>>>> d21ced7252cb5a970365b2753357949cf3a836cc

  following: [
    {
      user: {
        type: Schema.Types.ObjectId,

<<<<<<< HEAD
        ref: 'User',
=======
        ref: "User",
>>>>>>> d21ced7252cb5a970365b2753357949cf3a836cc
      },
    },
  ],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,

<<<<<<< HEAD
        ref: 'User',
=======
        ref: "User",
>>>>>>> d21ced7252cb5a970365b2753357949cf3a836cc
      },
    },
  ],

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
    default: Date.now(),
  },
  facebook_id: String,
  Twitter_id: String,
  github_id: String,
  instagram_id: String,
  instagramActivity: [{}],
});

<<<<<<< HEAD
const User = mongoose.model('User', userSchema);
=======
const User = mongoose.model("User", userSchema);
>>>>>>> d21ced7252cb5a970365b2753357949cf3a836cc
module.exports = User;
