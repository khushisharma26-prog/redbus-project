const express = require('express');
const Notification = require('../models/Notification');
const sendEmail = require('../utils/mailer');

const router = express.Router();

/* ===============================
   FETCH ALL NOTIFICATIONS
================================ */
router.get('/', async (req, res) => {
  try {
    const notes = await Notification.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

/* ===============================
   FETCH USER NOTIFICATIONS
================================ */
router.get('/:email', async (req, res) => {
  const notes = await Notification.find({ userEmail: req.params.email });
  res.json(notes);
});

/* ===============================
   BOOKING CONFIRMATION
================================ */
router.post('/booking', async (req, res) => {
  const { email } = req.body;

  const note = new Notification({
    userEmail: email,
    message: 'Your bus booking is confirmed!',
    type: 'booking'
  });

  await note.save();
  await sendEmail(email, 'Booking Confirmed', note.message);

  res.json({ message: 'Booking notification sent' });
});

/* ===============================
   BOOKING CANCELLATION
================================ */
router.post('/cancel', async (req, res) => {
  const { email } = req.body;

  const note = new Notification({
    userEmail: email,
    message: 'Your bus booking has been cancelled.',
    type: 'cancel'
  });

  await note.save();
  await sendEmail(email, 'Booking Cancelled', note.message);

  res.json({ message: 'Cancellation notification sent' });
});

/* ===============================
   PROMOTIONAL NOTIFICATION
================================ */
router.post('/promo', async (req, res) => {
  const { email } = req.body;

  const note = new Notification({
    userEmail: email,
    message: 'Special offer! Get 20% off on your next booking.',
    type: 'promo'
  });

  await note.save();
  res.json({ message: 'Promotional notification created' });
});

/* ===============================
   REMINDER NOTIFICATION
================================ */
router.post('/reminder', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const note = new Notification({
    userEmail: email,
    message: 'Reminder: Your bus journey is scheduled soon.',
    type: 'reminder'
  });

  await note.save();
  res.json({ message: 'Reminder notification created' });
});

module.exports = router;
