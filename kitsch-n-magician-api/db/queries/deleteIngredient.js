const db = require('../connection');


const deleteIngredient = (ingredientId, userId) => {
  return db.query(
    `DELETE FROM kitchen_items WHERE ingredient_id = $1 AND user_id = $2`,
    [ingredientId, userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = deleteIngredient
