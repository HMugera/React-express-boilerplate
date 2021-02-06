const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});
const db2 = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE2,
  multipleStatements: true,
});

db.connect((err) => {
  if (!err) {
    console.log('Conneted');
  } else {
    console.log('Connection failed');
    console.log(err);
  }
});
db2.connect((err) => {
  if (!err) {
    console.log('Conneted');
  } else {
    console.log('Connection failed');
    console.log(err);
  }
});

module.exports = { db, db2 };
