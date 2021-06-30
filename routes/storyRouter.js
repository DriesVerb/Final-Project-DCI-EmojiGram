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
module.exports = router;

router.get("/genre/:genre", storyController.getGenre);
