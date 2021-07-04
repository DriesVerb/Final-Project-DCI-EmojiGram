const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");
const User = require("../models/User");
// /user/story/

const auth = require("../middleware/auth");

router.post("/create", auth, storyController.create);

router.get("/publishedStory", storyController.published);

router.get("/show/:id", auth, storyController.show);

router.put("/editStory/:id", auth, storyController.edit);

router.delete("/delete/:id", auth, storyController.deleteStorie);

router.get("/filter", storyController.alphabetical);
// router.get("/filter/:number", storyController.selectNumber);
router.get("/genre/:genre", storyController.getGenre);

router.get("/time", storyController.sortTime);
// router.get("/likes/:id", storyController.sortLikes);
// router.put("/author", storyController.author);
module.exports = router;
