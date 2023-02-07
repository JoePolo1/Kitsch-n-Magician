const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM ingredients;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
