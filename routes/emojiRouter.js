const express = require(`express`);
const router = express.Router();

const emojiController = require("../controllers/emojiController");

router.get("/", emojiController.test);

// find the whole list
router.get("/all", emojiController.allEmojis);

// find only characters
router.get("/allc", emojiController.allCharacters);

router.get("/story", emojiController.generateStory);

module.exports = router;
