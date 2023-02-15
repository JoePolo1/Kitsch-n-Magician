require('dotenv').config();
const db = require('./db/connection');

const getFavRecipes = require('./db/queries/favouriteRecipes');
const { addRecipes, addRecipesWithReturn } = require('./db/queries/recipes');
const addFavouriteRecipes = require('./db/queries/addFavouriteRecipes');
const addFavouriteTable = require('./db/queries/addFavouriteTable');
const deleteFavById = require('./db/queries/deleteFavById');
const addIngredientsByUser = require('./db/queries/addIngredientsByUser');
const addIngredient = require('./db/queries/addIngredient');
const deleteIngredient = require('./db/queries/deleteIngredient');
const deleteGameRecipes = require('./db/queries/deleteGameRecipes');
const displayPantry = require('./db/queries/displayKitchenItems');
const deletePantryItem = require('./db/queries/deletePantryItem');
const checkingGameExists = require('./db/queries/checkingGameExists');
const yesButton = require('./db/queries/yesButton');
const noButton = require('./db/queries/noButton');
const selectMealPrepRecipes = require('./db/queries/selectMatchedRecipes');

const getName = require('./db/queries/getName');
const addGameRecipes = require('./db/queries/addGameRecipes');
const selectExistingGame = require('./db/queries/selectExistingGame');
const matchedRecipes = require('./db/queries/matchedRecipes');
const selectRecipeById = require('./db/queries/selectRecipebyId');

const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

const express = require('express');
const cors = require('cors');
// Web server config
const bodyparser = require("body-parser");
// serve static files from ../build (needed for React)
// const cwd = process.cwd();
const PORT = 3001;
const app = express();
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cors());
app.use(bodyparser.json());

// Separated Routes for each Resource
// Mount all resource routes
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
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
});

//retrieves first name to display in navbar
app.post('/getname', (req, res) => {
  getName(req.body.userId)
    .then((response) => {

      res.send(response);
    });
});


//retrieves favourite recipes using userID
app.post('/myrecipes', async (req, res) => {
  res.send(await getFavRecipes(req.body.userId));
});

//adds recipes to the favourites table that the user selects
app.post('/myfavs', (req, res) => {
  addRecipes(req.body.items.item)
    .then((result) => {
      return addFavouriteRecipes(req.body.items.item.title);
    })
    .then((recipeId) => {
      return addFavouriteTable(recipeId, req.body.userId);
    })
    .then((data) => {
      res.send({ result: "Successful" });
    });
});

//adds recipes to the recipes table and adding this table to the gamerecipes table
app.post('/matchgame', (req, res) => {
  addRecipesWithReturn(req.body.items.recipe)
    .then((recipeId) => {
      return addGameRecipes(recipeId, req.body.userId);
    })
    .then(() => { return selectExistingGame(req.body.userId); })
    .then((result) => {
      return res.send(result);
    });
});

//adds matched recipe to the mealprep table
app.post('/matchedcolumn', (req, res) => {
  selectMealPrepRecipes(req.body.userId)
    .then((result) => {
      return res.send(result);
    });
});

//retrieves active game information
app.post('/getmygame', (req, res) => {
  selectExistingGame(req.body.userId)
    .then((result) => {
      return res.send(result);
    });
});

//adds ingredients to the ingredient table
app.post('/myingredients', (req, res) => {
  addIngredient(req.body.ingredient)
    .then((returnedIngredientId) => addIngredientsByUser(req.body.userId, returnedIngredientId))
    .then(() => res.send("add was successfull"));
});

//retrieves the pantry items to display based on userid
app.post('/mypantry', (req, res) => {
  displayPantry(req.body.userId)
    .then((result) => {
      res.send(result);
    });
});

//deletes from favourites table
app.post('/deleteFav', (req, res) => {
  deleteFavById(req.body.recipeId, req.body.userId);
  res.send("successful deletion.");
});

//deletes ingredients from ingredients table
app.post('/deleteIngredForUser', (req, res) => {

  deleteIngredient(req.body.ingredientName, req.body.userId);
  res.send("successful deletion.");
});

//delete items from household table
app.post('/deletePantryItems', (req, res) => {
  deletePantryItem(req.body.ingredientId, req.body.userId);
  res.send("successful deletion");
});

//checks if game already exists
app.post('/load-game', (req, res) => {
  checkingGameExists(req.body.userId)
    .then((response) => {
      if (response.rows.length === 0) {
        // write code if game does not exist
        res.send(false);
      }
      else {
        //write code if game exists
        res.send(true);
      }
    });
});

//updates game table when yes button is pressed
app.post('/voteYes', (req, res) => {

  yesButton(req.body.userId, req.body.recipeId)
    .then((response) => {
      if (response === undefined) {
        res.send("no table");
      }
      if (response.matcher_decision === 2) {
        return matchedRecipes(req.body.userId, response.recipe_id)
          .then(() => selectRecipeById(req.body.recipeId))
          .then((result) => res.send(result));
      } else {
        res.send("game deleted");
      }
    });
});

//updates game table when no button is pressed
app.post('/voteNo', (req, res) => {
  noButton(req.body.userId, req.body.recipeId);
  res.send("successful NO vote");
});

//game table removed when game is completed
app.post('/removeGame', (req, res) => {
  deleteGameRecipes(req.body.userId)
    .then((response) => {
      res.send("game deleted");
    });
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
