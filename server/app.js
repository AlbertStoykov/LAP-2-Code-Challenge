// Creating the server listening at port 3000

const db = require("./dbConfig");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express departing from  http://localhost:${port} :)`);
});

db.connect();

app.get("/", (req, res) => {
  let intro =
    "<h2>Here's an app where you can express your feelings anonymously!</h2>";
  res.send(intro);
});

app.get("/users", (req, res) => {
  db.query(`Select * FROM users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  db.end;
});
