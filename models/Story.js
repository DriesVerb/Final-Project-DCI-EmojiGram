const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  author: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  emojis: [],
  title: String,
  text: String,
  richText: String,

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  createdAt: {
    type: String,
    default: Date.now,
  },
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;
