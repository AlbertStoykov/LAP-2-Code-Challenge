// Creating database connection

const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root1997",
  database: "postgres",
});
