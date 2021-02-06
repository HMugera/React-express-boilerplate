const { db, db2 } = require('../connection');

exports.getEmployees = (req, res) => {
  db.query(`SELECT * FROM employees`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result);
    }
  });
};

exports.getBooks = (req, res) => {
  db2.query(`SELECT * FROM books`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result);
    }
  });
};
