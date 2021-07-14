const express = require(`express`);
const router = express.Router();

// controller
const userController = require("../controllers/userController");

// own middleware
const auth = require("../middleware/auth");

// routes
router.get("/normal", userController.test);
router.get("/private", auth, userController.testPrivate);
router.get("/profile", auth, userController.userProfile);
router.put("/edit/:id", auth, userController.editProfile);
router.delete("/delete/:id", auth, userController.deleteProfile);
router.get("/profile/mystories", auth, userController.myStories);
router.get("/followers/:id", userController.followers);

module.exports = router;
