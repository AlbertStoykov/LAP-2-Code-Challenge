// Creating the server listening at port 3000

const client = require("./dbConnection");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express departing from port ${port}!`);
});

client.connect();
