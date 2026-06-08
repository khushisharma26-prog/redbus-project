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
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/* ===============================
   FETCH USER NOTIFICATIONS
================================ */
router.get('/:email', async (req, res) => {
  try {
    const notes = await Notification.find({
      userEmail: req.params.email
    });

    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/* ===============================
   BOOKING CONFIRMATION
================================ */
router.post('/booking', async (req, res) => {
  try {
    const { email, name, source, destination, date } = req.body;

    const message = `Hey ${
      name || 'User'
    }, your bus ticket is confirmed from ${source} to ${destination} on ${
      date || 'the scheduled date'
    }. Happy journey! 🚌`;

    const note = new Notification({
      userEmail: email,
      message,
      type: 'booking'
    });

    await note.save();

    // Respond immediately
    res.json({
      message: 'Booking notification sent',
      notification: note
    });

    // Send email in background
    sendEmail(email, 'Booking Confirmed 🚌', message)
      .then(() => {
        console.log('✅ Booking email sent successfully');
      })
      .catch((err) => {
        console.error('❌ Booking email failed:', err);
      });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to send notification'
    });
  }
});

/* ===============================
   BOOKING CANCELLATION
================================ */
router.post('/cancel', async (req, res) => {
  try {
    const { email } = req.body;

    const note = new Notification({
      userEmail: email,
      message: 'Your bus booking has been cancelled.',
      type: 'cancel'
    });

    await note.save();

    // Respond immediately
    res.json({
      message: 'Cancellation notification sent'
    });

    // Send email in background
    sendEmail(email, 'Booking Cancelled', note.message)
      .then(() => {
        console.log('✅ Cancellation email sent successfully');
      })
      .catch((err) => {
        console.error('❌ Cancellation email failed:', err);
      });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to send cancellation notification'
    });
  }
});

/* ===============================
   PROMOTIONAL NOTIFICATION
================================ */
router.post('/promo', async (req, res) => {
  try {
    const { email } = req.body;

    const note = new Notification({
      userEmail: email,
      message: 'Special offer! Get 20% off on your next booking.',
      type: 'promo'
    });

    await note.save();

    res.json({
      message: 'Promotional notification created'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create promotion'
    });
  }
});

/* ===============================
   REMINDER NOTIFICATION
================================ */
router.post('/reminder', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'Email is required'
      });
    }

    const note = new Notification({
      userEmail: email,
      message: 'Reminder: Your bus journey is scheduled soon.',
      type: 'reminder'
    });

    await note.save();

    res.json({
      message: 'Reminder notification created'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create reminder'
    });
  }
});

module.exports = router;