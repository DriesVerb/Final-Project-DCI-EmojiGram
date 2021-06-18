const User = require("../models/User");

//Local Strategy
const LocalStrategy = require("passport-local").Strategy;

//Third Party
const GithubStrategy = require("passport-github").Strategy;

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
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://5000/auth/github/callback",
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
};
