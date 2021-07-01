const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  author: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  emojis: [],
  title: String,
  text: String,
  richText: String,
  createdBy: {
    username: String,
    name: String,
  },
  genre: String,
  subGenre: String,
  likes: [
    {
      userId: Number,
    },
  ],
  rating: [
    {
      userId: Number,
      ratingArray: [],
    },
  ],
  favorite: [
    {
      userId: Number,
    },
  ],
  comments: [
    {
      userId: Number,
      name: String,
      text: {},
    },
  ],
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;
