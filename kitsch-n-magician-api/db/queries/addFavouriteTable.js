const db = require('../connection');

const addFavouriteTable = (recipe_id, user_id) => {
  return db.query(
    `INSERT INTO favourite_recipes (recipe_id, user_id)
    VALUES($1, $2)`,
    [recipe_id, user_id]
  )
}

module.exports = addFavouriteTable

