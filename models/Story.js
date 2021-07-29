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
  views: {
    type: Number,
    default: 0,
  },
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
        username: {
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
    type: Date,
    default: Date.now,
  },
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;