const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

/* ===============================
   CREATE BOOKING
================================ */
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed' });
  }
});

/* ===============================
   GET ALL BOOKINGS (optional)
================================ */
router.get('/', async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

module.exports = router;
