// load .env data into process.env
require('dotenv').config();
const getFavRecipes = require('./db/queries/favouriteRecipes');
const {addRecipes} = require('./db/queries/recipes')
const addFavouriteRecipes  = require('./db/queries/addFavouriteRecipes')
const addFavouriteTable  = require('./db/queries/addFavouriteTable')

const addIngredientsByUser = require('./db/queries/addIngredientsByUser')
const addIngredient = require('./db/queries/addIngredient')

const displayPantry = require('./db/queries/displayKitchenItems')

const express = require('express');
const cors = require('cors')


// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const morgan = require('morgan');
const bodyparser = require("body-parser");

// serve static files from ../build (needed for React)
// const cwd = process.cwd();

const PORT = 3001;
const app = express();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   '/styles',
//   sassMiddleware({
//     source: __dirname + '/styles',
//     destination: __dirname + '/public/styles',
//     isSass: false, // false => scss, true => sass
//   })
// );
// app.use(express.static('public'));
app.use(cors())
app.use(bodyparser.json());



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const db = require('./db/connection');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/test', (req, res) => {
  addFavouriteRecipes("Vegan stuffed Zucchini Boats")
  console.log('hello sup')
  res.json({test: 'hello'});
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username LIKE $1 AND password LIKE $2",
    [username, password],
    (err, result) => {

      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);

      } else {
        res.send({ message: "Username or password combination not valid" });
      }
    }
  );
});

app.use('/login', (req, res) => {
  res.send({
    token: "thisIsAUserToken"
  });
})

app.post('/myrecipes', async (req, res) => {
  res.send(await getFavRecipes(req.body.userId))
})

app.post('/myfavs', (req, res) => {
  // res.send(await addRecipes(req.body.items.item)
  // .then((result)=>{
  //   addFavouriteRecipes(req.body.items.item.title)
  //   .then((data)=>{
  //     console.log("we are getting from promise", data);
  //   });
  // .then(addFavouriteTable(req.body.userId, addFavouriteRecipes(req.body.items.item.title))))
  addRecipes(req.body.items.item)
  .then((result)=>{
    console.log("We are afterward in ADd REceipies promise closed");
    addFavouriteRecipes(req.body.items.item.title)
    .then((recipeId)=>{
      // console.log("we are getting from promise", recipeId);
      addFavouriteTable(recipeId, req.body.userId)
      .then((data)=>{
        res.send({result: "Successful"});
      });//addFavoriteTable code closes here.
    });//addfavourite code closes here.
  }); // for AddRecepies Code closes here.
}); //app.post


app.post('/myingredients', (req, res) => {
  console.log(req.body);
  addIngredient(req.body.ingredient)
  .then((returnedIngredientId) => addIngredientsByUser(req.body.userId, returnedIngredientId))
  .then(() => res.send("add was successfull"))

app.post('/mypantry', (req, res) => {

  displayPantry(req.body.userId)
 .then((result) =>{
  
  res.send(result)
 })

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

