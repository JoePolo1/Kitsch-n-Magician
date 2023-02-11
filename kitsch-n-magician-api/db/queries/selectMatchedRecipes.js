const db = require('../connection');
const axios = require('axios')


const selectMealPrepRecipes = (userId) => {
  console.log('userId', userId)
    return db.query(`
    Select recipes.*
    FROM recipes
    JOIN meal_preps ON recipe_id = recipes.id
    WHERE meal_preps.household_id = (SELECT household_id FROM users WHERE users.id = $1)
    `, [userId])
    .then(data => {
      console.log("data rows from getFavs", data.rows)
      return JSON.stringify(data.rows);
    }).catch(err => {return err});
  }





module.exports = selectMealPrepRecipes
