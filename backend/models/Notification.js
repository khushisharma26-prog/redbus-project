const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    userEmail: String,
    message: String,
    type: {
      type: String,
      enum: ['booking', 'cancel', 'reminder', 'promo']
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
