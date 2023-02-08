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


const addRecipes = (state) => {

  return db.query(`
  INSERT INTO recipes (title, ready_in_minutes, spoon_url, image, summary, vegetarian, vegan, gluten_free, dairy_free )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) `,
[
state.title,
state.ready_in_minutes,
state.spoon_url,
state.image,
state.summary,
state.vegetarian,
state.vegan,
state.gluten_free,
state.dairy_free ])
}

module.exports = { getRecipes, getRecipeWithIngredients, addRecipes };
