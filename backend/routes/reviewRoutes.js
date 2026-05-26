const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
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
