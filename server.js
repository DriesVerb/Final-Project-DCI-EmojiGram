const express = require(`express`);
require('dotenv').config();
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');



app.use(express.static(__dirname+ '/public'))

app.use(cors());
// Database + connect
const connectDB = require('./config/db');
connectDB();

// internal middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('API Running');
});

// server
const PORT = process.env.PORT || 5000;

//passport
const passport = require('passport');
require('./config/passport')(passport);

//passport Settings
app.use(passport.initialize());
app.use(passport.session());

//Local login
app.post(
  '/login/passport/local',
  passport.authenticate('local'),
  (req, res) => {
    res.send(req.user);
  }
);

//Routes
const signUpRouter = require('./routes/signUpRouter');
app.use('/auth/signUp', signUpRouter);

const logInRouter = require('./routes/logInRouter');
app.use('/auth/login', logInRouter);

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const emojiRouter = require('./routes/emojiRouter');
app.use('/emoji', emojiRouter);

const storyRouter = require('./routes/storyRouter');
app.use('/user/story', storyRouter);

const profilePics = require('./routes/uploadPicture');
app.use('/profile', profilePics)

//Github login
app.get('/login/passport/github', passport.authenticate('github'));
app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: 'http://local:3000',
  }),
  (req, res) => {
    console.log(req.user);
    res.redirect('http://localhost:3000/profile' + req.user._id);
  }
);

//Facebook login
app.get('/login/passport/facebook', passport.authenticate('facebook'));
app.get(
  '/login/passport/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: 'http//localhost:3000',
  }),
  (req, res) => {
    res.redirect('http://localhost:3000/profile/' + req.user.id);
  }
);

//* Instagram Login
app.get('/login/passport/instagram', passport.authenticate('instagram'));
app.get(
  '/auth/passport/instagram/callback',
  passport.authenticate('instagram', {
    failureRedirect: 'http//localhost:3000',
  }),
  (req, res) => {
    res.redirect('http://localhost:3000/profile/' + req.user.id);
  }
);










app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
