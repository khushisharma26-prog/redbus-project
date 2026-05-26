const express = require('express');
const Route = require('../models/Route');

const router = express.Router();

// GET routes with optional filter
router.get('/', async (req, res) => {
  const { source, destination } = req.query;

  let query = {};
  if (source) query.source = new RegExp(source, 'i');
  if (destination) query.destination = new RegExp(destination, 'i');

  const routes = await Route.find(query);
  res.json(routes);
});

module.exports = router;
