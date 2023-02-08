const db = require('../connection');
const axios = require('axios')


const getFavRecipes = (userId) => {
  console.log('userId', userId)
    return db.query(`
    SELECT * FROM recipes
    WHERE recipes.id = (SELECT recipe_id FROM favourite_recipes WHERE user_id = $1)
    `, [userId])
    .then(data => {
      console.log("data rows from getFavs", data.rows)
      return JSON.stringify(data.rows);
    }).catch(err => {return err});
  }



module.exports = getFavRecipes ;
