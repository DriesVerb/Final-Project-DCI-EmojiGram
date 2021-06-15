const User = require("../models/User");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');



exports.logIn = (req, res) => {  try {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
};

exports.logInPost = 
    async (req, res) => {
        //destructing req.body object
        const {email, password} = req.body;

        //check the user available
      try
      {
        let user = await User.findOne({ email })
        if (!user) { res.status(400).json({ msg: 'please sign up' }) }
        
        //match the password
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) { return  res.status(400).json({msg: 'password is not correct! Please try again!'})
        }
            
            // jwt
 
            const payload = {
                user: {
                  id: user.id,
                },
              };
        
              jwt.sign(
                payload,
                config.get('jwtSecret'),
                (err, token) => {
                  if (err) throw err;
                  res.json({token});
                },
              );
            } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
            }
          }