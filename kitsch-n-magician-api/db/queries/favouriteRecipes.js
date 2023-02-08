const db = require('../connection');
import useToken from '../../../kitsch-n-magician/src/hooks/useToken'
import axios from 'axios'

const getFavRecipes = () => {
  axios.post('http://localhost:3000/myrecipes', {

  }).then((response) => {
    console.log("response of getFavrecipes", response)
    return db.query(`
    SELECT * FROM recipes
    WHERE recipes.id = (SELECT recipe_id FROM favourite_recipes WHERE user_id = $1)
    `, [response])
    .then(data => {
      console.log("data rows from getFavs", data.rows)
      return data.rows;
    });
  })

};


module.exports = { getFavRecipes };
