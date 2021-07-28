const User = require("../models/User");
const Story = require("../models/Story");
// const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};

//User Profile
exports.userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({ path: "following", populate: { path: "user" } })
      .populate({ path: "followers", populate: { path: "user" } });

    if (!user) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Edit Profile
exports.editProfile = async (req, res) => {
  // console.log(req.body);
  const {
    username,
    name,
    email,
    password,
    location,
    occupation,
    hobby,
    avatar,
  } = req.body;
  //Build Profile Object by initializing an Object
  const profileFields = {};
  if (username) profileFields.username = username;
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;
  if (password) profileFields.password = password;
  if (location) profileFields.location = location;
  if (occupation) profileFields.occupation = occupation;
  if (hobby) profileFields.hobby = hobby;
  if (avatar) profileFields.avatar = avatar;
  try {
    let profile = await User.findById(req.params.id);
    console.log(profile);
    // check if profile exits
    if (!profile) return res.status(404).json({ msg: "User not found" });
    // console.log(profile);
    // Making sure its the user profile
    // if (profile.user.toString() !== req.user.id) {
    //   return res.status(401).json({ mgs: "Not authorized" });
    // }
    //calling from User Model to update
    //setting the profileFields above
    profile = await User.findByIdAndUpdate(
      req.params.id,
      { $set: profileFields },
      { new: true }
    );

    // update User Profile
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error");
  }
};
//////////////////////////////////////////////////////////////////////////////////////
exports.myStories = async (req, res) => {
  try {
    const stories = await Story.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    const num = stories.length;

    if (!stories) {
      return res.status(404).json({ msg: "Stories not found" });
    }
    const user = await User.findById(req.params.id);

    user.stories = num;

    user.save();

    res.json(stories);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
};

/////////////////////////////////////////////////////////////////////////////////

exports.usersProfile = async (req, res) => {
  try {
    const userProfile = await User.find({ _id: req.params.id });

    res.json(userProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

/////////////////////////////////////////////////////////////////////////////////

//Delete Profile
exports.deleteProfile = async (req, res) => {
  try {
    let profile = await User.findById(req.params.id);
    // check if profile exits
    if (!profile) return res.status(404).json({ msg: "User not found" });

    //calling from User Model to update
    //setting the profileFields above
    await User.findByIdAndRemove(req.params.id);
    // delete User Profile
    res.json({ msg: "User removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error");
  }
};
//Sort By Followers
exports.followers = async (req, res) => {
  try {
    await Profile.find((err, follow) => {
      res.json(follow);
    })
      .sort([["_id", -1]])
      .select("followers");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.followUser = async (req, res) => {
  try {
    const following = await User.findById(req.params.id)
      .populate({ path: "following", populate: { path: "user" } })
      .populate({ path: "followers", populate: { path: "user" } });

    // Check if the post has already been liked
    //some is like filtere but return boolean
    if (
      following.followers.some(
        (follower) => follower.user.toString() === req.user.id
      )
    ) {
      return res.status(400).json({ msg: "User already  followed" });
    }
    // unshhift is as push method but will put it on the begining
    following.followers.unshift({ user: req.user.id });
    console.log(following.followers);
    await following.save();

    const follower = await User.findById(req.user.id);
    follower.following.unshift({ user: following });
    console.log(follower.following);
    await follower.save();
    return res.json(following);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const following = await User.findById(req.params.id);

    if (
      !following.followers.some(
        (follower) => follower.user.toString() === req.user.id
      )
    ) {
      return res.status(400).json({ msg: "User has not yet been followed" });
    }
    // unshhift is as push method but will put it on the begining
    following.followers = following.followers.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    console.log(following.followers);

    await following.save();

    const follower = await User.findById(req.user.id);
    follower.following = follower.following.filter(
      ({ user }) => user.toString() !== req.params.id
    );
    console.log(follower.following);
    await follower.save();
    return res.json(following.followers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
