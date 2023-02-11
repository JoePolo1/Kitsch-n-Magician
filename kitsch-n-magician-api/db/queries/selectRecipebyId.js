const db = require('../connection');

const selectRecipeById = (recipeId) => {
  return db.query('SELECT * FROM recipes WHERE id= $1', [recipeId])
    .then(data => {
      return data.rows;
    });
};

module.exports = selectRecipeById
