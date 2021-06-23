const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");

// /user/story/

const auth = require("../middleware/auth");

router.post("/create", auth, storyController.create);

router.get("/publishedStory/:id", storyController.published);

router.get("/show/:id", auth, storyController.show)

router.put("/editStory/:id", auth, storyController.edit);

module.exports = router;
