const express = require('express');
const multer = require('multer');
const CommunityPost = require('../models/CommunityPost');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// CREATE post
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const post = new CommunityPost({
      userName: req.body.userName,
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : null
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Post creation failed' });
  }
});

// GET all posts
router.get('/', async (req, res) => {
  const posts = await CommunityPost.find().sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;

// ADD COMMENT
router.post('/:id/comments', async (req, res) => {
  try {
    console.log('COMMENT BODY:', req.body);

    const { userName, text } = req.body;

    if (!userName || !text) {
      return res.status(400).json({ message: 'Comment data missing' });
    }

    const post = await CommunityPost.findById(req.params.id);

    post.comments.push({
      userName,
      text
    });

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment' });
  }
});


// LIKE POST
router.post('/:id/like', async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);

    post.likes = post.likes + 1; // important
    await post.save();

    res.json({ likes: post.likes });
  } catch (err) {
    res.status(500).json({ message: 'Failed to like post' });
  }
});

