const db = require('../connection');

const yesButton = (userId, recipeId) => {
  return db.query(
    `UPDATE game_recipes
    SET matcher_decision = matcher_decision + 1, time_played = time_played + 1
    WHERE household_id = (SELECT household_id FROM users WHERE users.id = $1) AND recipe_id = $2
    RETURNING matcher_decision, recipe_id`,
    [userId, recipeId]
  )
  .then(data => {return data.rows[0]})
  .catch((error) => {console.log(error)})
}

module.exports = yesButton;
