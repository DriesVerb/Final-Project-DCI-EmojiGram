const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
/* const User = require('../models/User') */

exports.signUp = (req, res) => {};
exports.signUpPost = async (req, res) => {
  //destructing req.body object
  const { name, email, password } = req.body;

  //check the user if already exist
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
    }

    //create new user
    user = new User({
      name,
      email,
      password,
    });

    //Hash Password
    const salt = await bcrypt.genDalt(10);
    user.password = await bcrypt.hash(password, salt);

    //save user
    await user.save();

    // jwt

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
