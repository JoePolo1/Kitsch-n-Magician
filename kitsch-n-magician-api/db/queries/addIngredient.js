const db = require('../connection');

const addIngredient = (ingredient) => {
  return db.query(
    `INSERT INTO ingredients (name)
    VALUES($1) returning id`,
    [ingredient]
  )
    .then(data => data.rows[0].id)
  .catch((error) => {console.log(error)})
}

module.exports = addIngredient
