const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  emojis: [],
  title: String,
  text: {},
  createdBy: {
    username: String,
    name: String,
  },
  genre: {
    mainGenre: String,
    subGenre: String,
  },
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
