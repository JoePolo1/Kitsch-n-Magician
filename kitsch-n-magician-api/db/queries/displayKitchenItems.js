const db = require('../connection')

const displayPantry = (token) => {

  return db.query(
  `SELECT DISTINCT ingredients.name
  FROM kitchen_items
  JOIN ingredients ON kitchen_items.ingredient_id = ingredients.id
  WHERE household_id =
  (SELECT household_id
    FROM users
    WHERE users.id = $1)`, [token])
    .then(data => {
      return JSON.stringify(data.rows);
    }).catch(err => {return err})
}

module.exports = displayPantry
