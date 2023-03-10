const db = require('../connection');
const axios = require('axios')


const getFavRecipes = (userId) => {
    return db.query(`
    Select DISTINCT recipes.* FROM recipes
    JOIN favourite_recipes ON recipe_id = recipes.id
    JOIN USERS ON user_id = users.id
    WHERE favourite_recipes.user_id = $1
    `, [userId])
    .then(data => {
      return JSON.stringify(data.rows);
    }).catch(err => {return err});
  }





module.exports = getFavRecipes

