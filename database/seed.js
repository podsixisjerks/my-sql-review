const db = require('./index.js');

const data = [
  {
    name: 'adam',
    amount: 87
  },
  {
    name: 'E30',
    amount: 91
  },
  {
    name: 'miata',
    amount: 94
  },
  {
    name: 'triumph',
    amount: 73
  },
  {
    name: 'element',
    amount: 04
  }
];

data.forEach( ({ name, amount }) => {
  db.query(`INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount})`);
});