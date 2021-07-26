const express = require(`express`);
const router = express.Router();

// controller
const userController = require("../controllers/userController");

// own middleware
const auth = require("../middleware/auth");

// routes
router.get("/normal", userController.test);
router.get("/private", auth, userController.testPrivate);
router.get("/profile/", auth, userController.userProfile);

// public route to view profile
router.get("/profile/:id", userController.usersProfile);

router.put("/profile/:id/follow-user", auth, userController.followUser);
router.put("/profile/:id/unfollow-user", auth, userController.unfollowUser);

router.put("/edit/:id", auth, userController.editProfile);
router.delete("/delete/:id", auth, userController.deleteProfile);
router.get("/profile/mystories/:id", auth, userController.myStories);
router.get("/profile/friends/:id", userController.myStories);

router.get("/followers/:id", userController.followers);

module.exports = router;
