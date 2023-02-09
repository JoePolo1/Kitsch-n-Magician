const db = require('../connection');

const addFavouriteRecipes = (title) => {
  console.log('test', title)
  return db.query(
    `SELECT recipes.id
     FROM recipes
     WHERE recipes.title LIKE $1`,
     [title]
  )
  // .then((data) =>{
  //   // console.log("we are in the",  data.rows[0].id);
  //   return new Promise((resolve, reject)=>{
  //     resolve(data.rows[0].id);
  //   })
  // })
  .then(data => {return data.rows[0].id})
}



  module.exports = addFavouriteRecipes
