const express = require(`express`);
const router = express.Router();

// const User = require("../models/User");

// controller
const userController = require("../controllers/userController");

// own middleware
const auth = require("../middleware/auth");

// routes
router.get("/normal", userController.test);
router.get("/private", auth, userController.testPrivate);
router.put("/edit/:user_id", auth, userController.editProfile);
router.get("/profile/mystories", auth, userController.myStories);
router.get("/followers/:id", userController.followers);

module.exports = router;
