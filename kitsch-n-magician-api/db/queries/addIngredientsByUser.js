const db = require('../connection');

const addIngredientsByUser = (userId, ingredients) => {
  for (const ingredient of ingredients) {
    const query = "INSERT INTO users_ingredients (user_id, ingredient_id) VALUES ($1, $2)"
    const values = [userId, ingredient]
    db.query(query, values, (err) => {
      if (err) {
        console.error(err);
      }
    });
}}

module.exports = addIngredientsByUser
