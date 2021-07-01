const User = require("../models/User");
const Story = require("../models/Story");

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
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Edit Profile
exports.editProfile = async (req, res) => {
  // console.log(req.body);
  const { username, name, email, password, location, avatar } = req.body;

  //Build Profile Object by initializing an Object
  const profileFields = {};
  if (username) profileFields.username = username;
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;
  if (password) profileFields.password = password;
  if (location) profileFields.location = location;
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

exports.myStories = async (req, res) => {
  const user = req.user.id
  try {
    const stories =  Story.find({user:user}, (err,data)=>{
    res.json(data);
    })
    
  } catch (err) {
    console.error(err.message)
        res.status(500).send('Server Error')
  }
  

};

exports.followers = (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id, (err, data) => {
    if (err) throw err.message;
    res.json(data.followers);
  });
};

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
