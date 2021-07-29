const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const gravatar = require('gravatar');
const normalize = require('normalize-url');

exports.signUp = (req, res) => {
  res.json({ msg: "welcome to sing up" });
};
exports.signUpPost = async (req, res) => {
  //destructing req.body object
  const { username, email, password } = req.body;
 
  //check the user if already exist
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
    }

    else {
      
      const avatar = normalize(
        gravatar.url(email,  {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );
    //create new user
    user = new User({
      username,
      email,
      avatar,
      password,
    });

    //Hash Password

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    //save user
    await user.save();
    // jwt
    const payload = {
      user: {
        id: user.id,
      },

    }
    const jwtSecret = process.env.JWT_SECRET;
    jwt.sign(
      payload,
      jwtSecret,

      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );}

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
};
