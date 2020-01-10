const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ball'
});

db.connect( err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Database online!');
  }
})

module.exports = db;