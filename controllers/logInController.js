const User = require('../models/User');
const bcrypt = require('bcrypt');
require('dotenv').config();

const jwt = require('jsonwebtoken');

exports.logIn = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.logInPost = async (req, res) => {
  //destructing req.body object
  const { email, password } = req.body;

  //check the user available
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Either your email or password or both are not correct.. Please try again" });
    }

    //match the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "Either your email or password or both are not correct.. Please try again" });
    }

   
    // jwt
    const jwtSecret = process.env.JWT_SECRET;

    const payload = {
      user: {
        id: user.id,
        // added to test username
        name: user.username,
      },
    };

    jwt.sign(payload, jwtSecret, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

