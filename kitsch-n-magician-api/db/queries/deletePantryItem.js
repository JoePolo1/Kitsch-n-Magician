const db = require('../connection')


const deletePantryItem = (ingredientName, userId ) => {
  return db.query(
    `DELETE FROM kitchen_items
    WHERE ingredient_id = (SELECT ingredients.id FROM ingredients WHERE ingredients.name LIKE $1)
    AND household_id = (SELECT household_id FROM users WHERE users.id = $2)`,
    [ingredientName, userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = deletePantryItem


