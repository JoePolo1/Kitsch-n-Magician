const db = require('../connection');

const addFavouriteRecipes = (title) => {
  console.log('test', title)
  return db.query(
    `SELECT recipes.id
     FROM recipes
     WHERE recipes.title LIKE $1`,
     [title]
  )
  .then(data => {return data.rows[0].id})
}



  module.exports = addFavouriteRecipes
