const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

/* ===============================
   CREATE BOOKING
=============================== */
router.post('/', async (req, res) => {
  try {
    const { name, email, source, destination, date } = req.body;
    if (!name || !email || !source || !destination || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const booking = new Booking({ name, email, source, destination, date });
    await booking.save();
    res.json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed' });
  }
});

/* ===============================
   GET ALL BOOKINGS
=============================== */
router.get('/', async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

/* ===============================
   GET BOOKINGS BY EMAIL
=============================== */
router.get('/:email', async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

module.exports = router;