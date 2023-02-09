const db = require('../connection');


const deleteFavById = (recipeId, userId) => {
  return db.query(
    `DELETE FROM favourite_recipes WHERE recipe_id = $1 AND user_id = $2`,
    [recipeId, userId]
  )
  .catch((error) => {console.log(error)})
}

module.exports = deleteFavById
