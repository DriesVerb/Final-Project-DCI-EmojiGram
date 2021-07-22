const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  
  profilePics: String,
  
  Added_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },

  update_at: {
    type: Date,
  },
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
