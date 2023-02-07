const db = require('../connection');

const getRecipes = () => {
  return db.query('SELECT * FROM recipes;')
    .then(data => {
      return data.rows;
    });
};

const getRecipeWithIngredients = () => {
  return db.query(
` SELECT recipes.title, ingredients.name
  FROM recipes_ingredients
  LEFT JOIN recipes ON recipes.id = recipe_id
  LEFT JOIN ingredients ON ingredients.id = ingredient_id` )
}

module.exports = { getRecipes, getRecipeWithIngredients };
