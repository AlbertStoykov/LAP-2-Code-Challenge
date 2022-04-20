// Creating database connection to PostgreSQL
const { Pool } = require("pg");

const pool = new Pool({
  // host: "localhost",
  // user: "postgres",
  // port: 5432,
  // password: "root1997",
  // database: "postgres",
});

module.exports = pool;
