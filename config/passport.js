const User = require("../models/User");

//Local Strategy
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

//Third Party Strategy
const GithubStrategy = require("passport-github").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
// const InstagramStrategy = require("passport-instagram").Strategy;

//Serialize and deserialize
module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    user.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // Local Strategy  authentication
  passport.use(
    new LocalStrategy({ usernameField: "email" }, function (
      email,
      password,
      done
    ) {
      user.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) {
          return done(null, false);
        }
        if (password != user.password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  //Third Party Authentication
  //Github
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        // callbackURL: "auth/github/callback",
        callbackURL: "http://localhost:5000/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ github_id: profile.id }, (err, user) => {
          if (err) return done(err);
          if (user) {
            return done(null, user);
          } else {
            let newUser = new User({
              github_id: profile.id,
              username: profile.username,
            });
            newUser.save((err, doc) => {
              return done(null, doc);
            });
          }
        });
      }
    )
  );

  //Facebook Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/login/passport/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ facebook_id: profile.id }, (err, user) => {
          if (err) return done(err);
          if (user) {
            return done(null, user);
          } else {
            let newUser = new User({
              facebook_id: profile.id,
              username: profile.displayName,
            });
            newUser.save((err, doc) => {
              return done(null, doc);
            });
          }
        });
      }
    )
  );
};

//Passport Instagram strategy

// passport.use(new InstagramStrategy({
//     clientID: process.env.INSTAGRAM_CLIENT_ID,
//     clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/instagram/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//    User.findOne({ instagram_id: profile.id }, (err, user) => {
//           if (err) return done(err);
//           if (user) {
//             return done(null, user);
//           } else {
//             let newUser = new User({
//               instagram_id: profile.id,
//               username: profile.displayName,
//             });
//             newUser.save((err, doc) => {
//               return done(null, doc);
//             });
//           }
//         });
//     })

// )
