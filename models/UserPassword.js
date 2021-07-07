const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const PasswordSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  username: {
    type: String,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    },
  
    resetPasswordToken:{
      
    type: String,
            required: false,
},
    
    resetPasswordExpires: {
    
        type: String,
        required: false,
} 
}, {timeStamp: true});


PasswordSchema.pre('save', function (next) {
    
    const user = this
    if (!user.isModified('password')) return next();

    bcrypt.gensalt(10, function (err, salt) {
        
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            
            if (err) return next(err);
            user.password = hash;
            next()
        })

    })
})

PasswordSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

PasswordSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

    let payload = {
      
    id: this._id,
    email: this.email,
    username: this.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

PasswordSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Users', PasswordSchema);
