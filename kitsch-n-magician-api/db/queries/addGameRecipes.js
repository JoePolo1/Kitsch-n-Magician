const db = require('../connection');

const addGameRecipes = (user_id, recipe_id) => {
  // console.log("TESTING", )
  return db.query(
    `INSERT INTO game_recipes (household_id, recipe_id)
    VALUES(
      ((SELECT household_id
      FROM users
      WHERE users.id = $1), $2)`,
    [recipe_id, user_id]
  )
}

module.exports = addGameRecipes
