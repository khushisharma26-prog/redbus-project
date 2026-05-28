const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/* ---------- Middlewares ---------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Static files ---------- */
app.use('/uploads', express.static('uploads'));

/* ---------- Root Route ---------- */
app.get('/', (req, res) => {
  res.send('RedBus Backend Running 🚀');
});

/* ---------- MongoDB ---------- */
mongoose.connect('mongodb+srv://khushiiee26_db_user:khushisharma@cluster0.ojp1ebm.mongodb.net/redbus?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

/* ---------- Routes ---------- */
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/routes', require('./routes/routeRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});