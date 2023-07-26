const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:folk78@localhost:5432/jeans';
const db = pgp(connectionString);

module.exports = db;