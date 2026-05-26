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

/* ---------- MongoDB ---------- */
mongoose.connect('mongodb+srv://khushiiee26_db_user:<khushisharma>@cluster0.ojp1ebm.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

/* ---------- Routes ---------- */
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

/* ---------- Server ---------- */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/routes', require('./routes/routeRoutes'));

app.use('/api/reviews', require('./routes/reviewRoutes'));

app.use('/api/bookings', require('./routes/bookingRoutes'));
