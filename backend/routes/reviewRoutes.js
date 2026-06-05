const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { routeId, userName, rating, comment } = req.body;
    if (!routeId || !userName || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const review = new Review({ routeId, userName, rating, comment });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: 'Review submission failed' });
  }
});

router.get('/:routeId', async (req, res) => {
  const reviews = await Review.find({ routeId: req.params.routeId });

  const avg =
    reviews.length === 0
      ? 0
      : reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

  res.json({
    reviews,
    averageRating: avg.toFixed(1)
  });
});

module.exports = router;
