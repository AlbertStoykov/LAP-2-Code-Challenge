const db = require('./dbConfig');
const fs = require('fs');

const seedQuery = fs.readFileSync(__dirname + '/seedData.sql').toString();

db.query(seedQuery, [hash], (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Dev database seeded");
  }
});
