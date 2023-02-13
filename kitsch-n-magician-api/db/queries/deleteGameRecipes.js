const db = require('../connection');

const deleteGameRecipes = (user_id) => {
  return db.query(
    `DELETE FROM game_recipes
    WHERE household_id = (SELECT household_id FROM users WHERE users.id = $1)`,
    [user_id]
  )
}

module.exports = deleteGameRecipes
