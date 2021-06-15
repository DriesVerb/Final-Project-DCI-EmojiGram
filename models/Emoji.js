const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emojiSchema = new Schema({
  slug: String,
  character: String,
  unicodeName: String,
  codePoint: String,
  group: String,
  subGroup: String,
  variants: [
    {
      slug: String,
      character: String,
    },
  ],
});

const Emoji = mongoose.model("Emoji", emojiSchema);
module.exports = Emoji;
