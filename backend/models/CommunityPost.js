const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    comments: [
      {
        userName: String,
        text: String,
        createdAt: { type: Date, default: Date.now }
      }
    ],
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('CommunityPost', communityPostSchema);
