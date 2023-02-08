const db = require('../connection');
const axios = require('axios')


const getFavRecipes = (userId) => {
  console.log('userId', userId)
    return db.query(`
    Select recipes.* FROM recipes
    JOIN favourite_recipes ON recipe_id = recipes.id
    JOIN USERS ON user_id = users.id
    WHERE favourite_recipes.user_id = $1
    `, [userId])
    .then(data => {
      console.log("data rows from getFavs", data.rows)
      return JSON.stringify(data.rows);
    }).catch(err => {return err});
  }


  const addFavouriteRecipes = (title) => {

    return db.query(
      `SELECT recipes.id
       FROM recipes
       WHERE recipes.title LIKE $1`,
       [title]
    ).then(data => {return data.rows[0].id})
    }


    const addFavouriteTable = (user_id, recipe_id) => {
      return db.query(
        `INSERT INTO favourite_recipes (user_id, recipe_id)
        VALUES($1, $2)`,
        [user_id, recipe_id]
      )
    }

module.exports = {getFavRecipes, addFavouriteRecipes, addFavouriteTable} ;

