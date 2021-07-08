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

router.delete("/delete/:id", auth, storyController.deleteStory);



router.get("/filter", storyController.alphabetical);

router.get("/time", storyController.sortTime);

router.get("/genre/:genre", storyController.getGenre);
router.get("/likes", storyController.sortBylikes)


router.put("/like/:id", auth, storyController.likeStory);
router.put("/unlike/:id", auth, storyController.unlikeStory);


router.post("/comment/:id", auth, storyController.addComment);
router.delete("/comment/:id/:comment_id", auth, storyController.removeComment);

module.exports = router;
