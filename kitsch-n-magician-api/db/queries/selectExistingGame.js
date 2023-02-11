const db = require('../connection');

const selectExistingGame = (userId) => {
  // console.log("TESTING", )
  return db.query(
    `SELECT recipes.*, game_recipes.* FROM recipes
    JOIN game_recipes ON recipe_id = recipes.id
    WHERE household_id = (SELECT household_id FROM users WHERE users.id = $1)
    `,
    [userId])
    .then(data => {
      // console.log("backend data", data.rows)
      return data.rows
    }).catch(err => {return err})

}

module.exports = selectExistingGame
