const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  source: String,
  destination: String,
  distance: String,
  duration: String
});

module.exports = mongoose.model('Route', routeSchema);
