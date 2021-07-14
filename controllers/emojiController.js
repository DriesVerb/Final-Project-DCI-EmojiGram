const Emoji = require("../models/Emoji");

// test route
exports.test = (req, res) => {
  res.json({ msg: "hello this works" });
};

exports.allEmojis = async (req, res) => {
  try {
    const emojis = await Emoji.find();

    res.json(emojis);
  } catch (err) {
    console.error(err);
    res.status(500).send("overloaded emojis");
  }
};

exports.allCharacters = async (req, res) => {
  try {
    Emoji.find({}, "character", (err, docs) => {
      res.json(docs);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("overloaded emojis");
  }
};

exports.generateStory = async (req, res) => {
  try {
    await Emoji.find({}, ["character", "unicodeName"], (err, docs) => {
      const array = docs;

      const emojiOutput = new Set();

      while (emojiOutput.size < 5) {
        const randomNum = Math.trunc(Math.random() * docs.length);
        emojiOutput.add(array[randomNum]);
      }

      const toJson = [...emojiOutput];
      res.send(toJson);
    });
  } catch (err) {
    console.error(err.message);
  }
};
