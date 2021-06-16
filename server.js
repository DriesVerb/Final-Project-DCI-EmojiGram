const express = require(`express`);
require("dotenv").config();

const app = express();

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
    console.log(req.user);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
