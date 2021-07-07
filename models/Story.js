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
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    }
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
        user: {
          type: Schema.Types.ObjectId,
          ref: "User"
        },
        text: {
          type: String,
          required: true
        },
        name: {
          type: String
        },
        avatar: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],

  createdAt: {
    type: String,
    default: Date.now,
  },
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;
