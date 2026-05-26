const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    source: String,
    destination: String,
    date: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
