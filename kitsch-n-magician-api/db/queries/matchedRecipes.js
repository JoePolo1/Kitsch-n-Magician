const db = require('../connection');

const matchedRecipes = (userId, recipeId) => {
  return db.query(
    `INSERT INTO meal_preps (household_id, recipe_id)
     VALUES ((SELECT household_id FROM users WHERE users.id = $1), $2)
     RETURNING *`,
    [userId, recipeId]
  )
}

module.exports = matchedRecipes
