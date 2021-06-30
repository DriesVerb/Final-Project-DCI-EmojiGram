const express = require(`express`);
require("dotenv").config();
const morgan = require;
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const User = require("./models/User");

const app = express();
app.use(cors());

// Database + connect
const connectDB = require("./config/db");
connectDB();

// internal middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("API Running");
});

// server
const PORT = process.env.PORT || 5000;

//passport
const passport = require("passport");
require("./config/passport")(passport);

//passport Settings
app.use(passport.initialize());
app.use(passport.session());

//Local login
app.post(
  "/login/passport/local",
  passport.authenticate("local"),
  (req, res) => {
    res.send(req.user);
  }
);

//Routes
const signUpRouter = require("./routes/signUpRouter");
app.use("/auth/signUp", signUpRouter);

const logInRouter = require("./routes/logInRouter");
app.use("/auth/login", logInRouter);

const userRouter = require("./routes/userRouter");
app.use("/user", userRouter);

const emojiRouter = require("./routes/emojiRouter");
app.use("/emoji", emojiRouter);

const storyRouter = require("./routes/storyRouter");
app.use("/user/story", storyRouter);

//Github login
app.get("/login/passport/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://local:3000",
  }),
  (req, res) => {
    console.log(req.user);
    res.redirect("http://localhost:3000/profile" + req.user._id);
  }
);

//Facebook login
app.get("/login/passport/facebook", passport.authenticate("facebook"));
app.get(
  "/login/passport/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "http//localhost:3000",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/profile/" + req.user.id);
  }
);

//! Email sent by the customer from the contactus.js
app.post("/sendEmail", (req, res) => {
  console.log(req.body);
  const { username, message, email } = req.body;
  // const user = User.findOne({ message: req.body.message })
  // user.message = req.body.message;
  // console.log(user)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    //  to: 'lotuseylie@outlook.com', //username.body.user
    from: "metalrocks71.79@gmail.com",

    // subject: 'Email sent by sendgrid',
    templateId: process.env.TEMPLATE_EMAIL_ID,
  };

  //!admin msg
  const adminMsg = {
    to: "metalrocks71.79@gmail.com",
    //  to: 'lotuseylie@outlook.com', //username.body.user
    subject: "TBD",
    from: email,
    html: `<p>${message}</p>`,
    // subject: 'Email sent by sendgrid',
    // templateId: process.env.TEMPLATE_SENT_ID,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent successfully to the user");
      sgMail
        .send(adminMsg)
        .then(() => {
          console.log(" msg sent to Admin!!");
        })
        .catch((err) => console.log(err));
      res.json("");
    })
    .catch((err) => console.log(err));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
