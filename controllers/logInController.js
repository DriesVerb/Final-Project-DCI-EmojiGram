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
<<<<<<< HEAD
      res.status(400).json({ msg: 'please sign up' });
=======
      return res
        .status(400)
        .json({ msg: "Either your email or password or both are not correct.. Please try again" });
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
    }

    //match the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
<<<<<<< HEAD
        .json({ msg: 'password is not correct! Please try again!' });
    }

=======
        .json({ msg: "Either your email or password or both are not correct.. Please try again" });
    }

   
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
    // jwt
    const jwtSecret = process.env.JWT_SECRET;

    const payload = {
      user: {
        id: user.id,
        // added to test username
        name: user.username,
      },
    };
    const jwtSecret = process.env.JWT_SECRET;
    jwt.sign(payload, jwtSecret, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.changePassword;
