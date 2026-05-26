const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
