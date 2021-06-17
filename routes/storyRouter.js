const express = require('express')
const router = express.Router();
const storyController = require("../controllers/storyController")
const auth = require("../middleware/auth")

router.post("/create",auth, storyController.create)

router.get("/publishedStory/:id", storyController.published)

router.put("/editStory/:id",auth, storyController.edit)

module.exports = router;