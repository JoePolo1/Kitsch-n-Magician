const db = require('../connection');


const checkingGameExists = (userId) => {
  return db.query(
    `SELECT 1 FROM game_recipes
    WHERE household_id = (SELECT household_id FROM users WHERE users.id = $1)
    LIMIT 1`,
    [userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = checkingGameExists
