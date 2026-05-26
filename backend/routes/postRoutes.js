const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// CREATE POST WITH IMAGE
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const post = new Post({
      userName: req.body.userName,
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : null
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Image upload failed' });
  }
});

// GET POSTS
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;
