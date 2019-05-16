const { dbConfig } = require('../config');
const pgp = require('pg-promise')();
const db = pgp(
  'postgres://' +
    dbConfig.user +
    ':' +
    dbConfig.password +
    '@' +
    dbConfig.host +
    ':' +
    dbConfig.port +
    '/' +
    dbConfig.name
);

module.exports = db;
