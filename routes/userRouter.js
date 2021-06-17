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
router.post("/profile/:user_id", auth, userController.createProfile);
router.put("/edit/:user_id", auth, userController.editProfile);

// router.post("/profile/:user_id", (req, res) => {
//   User.findOne({
//     user: req.params.user_id,
//   });
// });

module.exports = router;
