const db = require('../connection');


const deleteIngredient = (ingredientName, userId) => {
  return db.query(
    `DELETE FROM kitchen_items
    WHERE ingredient_id = (SELECT ingredients.id FROM ingredients WHERE ingredients.name LIKE $1)
    AND user_id = $2`,
    [ingredientName, userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = deleteIngredient




