const { originUrl } = require('../config');

const cors = require('cors');
module.exports = cors({
  origin: ['*', originUrl],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
});
