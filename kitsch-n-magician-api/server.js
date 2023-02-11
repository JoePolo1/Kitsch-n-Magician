// load .env data into process.env
require('dotenv').config();
const getFavRecipes = require('./db/queries/favouriteRecipes');
const { addRecipes, addRecipesWithReturn } = require('./db/queries/recipes');
const addFavouriteRecipes = require('./db/queries/addFavouriteRecipes');
const addFavouriteTable = require('./db/queries/addFavouriteTable');
const deleteFavById = require('./db/queries/deleteFavById');
const addIngredientsByUser = require('./db/queries/addIngredientsByUser');
const addIngredient = require('./db/queries/addIngredient');
const deleteIngredient = require('./db/queries/deleteIngredient');


const displayPantry = require('./db/queries/displayKitchenItems');
const deletePantryItem = require('./db/queries/deletePantryItem');
const checkingGameExists = require('./db/queries/checkingGameExists');
const yesButton = require('./db/queries/yesButton')
const noButton = require('./db/queries/noButton')



const express = require('express');
const cors = require('cors');


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
app.use(cors());
app.use(bodyparser.json());



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const db = require('./db/connection');
const addGameRecipes = require('./db/queries/addGameRecipes');
const selectExistingGame = require('./db/queries/selectExistingGame');
// const { default: YesButton } = require('../kitsch-n-magician/src/components/Buttons/YesButton');


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
  addFavouriteRecipes("Vegan stuffed Zucchini Boats");
  console.log('hello sup');
  res.json({ test: 'hello' });
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
});

app.post('/myrecipes', async (req, res) => {
  res.send(await getFavRecipes(req.body.userId));
});

app.post('/myfavs', (req, res) => {
  // res.send(await addRecipes(req.body.items.item)
  // .then((result)=>{
  //   addFavouriteRecipes(req.body.items.item.title)
  //   .then((data)=>{
  //     console.log("we are getting from promise", data);
  //   });
  // .then(addFavouriteTable(req.body.userId, addFavouriteRecipes(req.body.items.item.title))))
  addRecipes(req.body.items.item)
    .then((result) => {
      console.log("We tryare afterward in ADd REceipies promise closed");
      return addFavouriteRecipes(req.body.items.item.title);
    })
    .then((recipeId) => {
      // console.log("we are getting from promise", recipeId);
      return addFavouriteTable(recipeId, req.body.userId);
    })
    .then((data) => {
      res.send({ result: "Successful" });
    });//addFavoriteTable code closes here.
});//addfavourite code closes here.


app.post('/matchgame', (req, res) => {
  // console.log('sent to the back end', req.body)
  addRecipesWithReturn(req.body.items.recipe)
    .then((recipeId) => {
      // console.log("we are getting from promise", recipeId);
      return addGameRecipes(recipeId, req.body.userId);
    })
    .then(() =>
      {return selectExistingGame(req.body.userId)})
    .then((result) => {
      return res.send(result)
    })
    } )
    // .then((data) => {
    //   res.send({ result: "Successful" });
    // });

app.post('/getmygame', (req, res) => {
  selectExistingGame(req.body.userId)
  .then((result) => {
    console.log("RESULT IS ", result)
    return res.send(result)
  })
})



app.post('/myingredients', (req, res) => {
  // console.log(req.body);
  addIngredient(req.body.ingredient)
    .then((returnedIngredientId) => addIngredientsByUser(req.body.userId, returnedIngredientId))
    .then(() => res.send("add was successfull"));

});

app.post('/mypantry', (req, res) => {

  displayPantry(req.body.userId)
    .then((result) => {

      res.send(result);
    });
});

app.post('/deleteFav', (req, res) => {
  deleteFavById(req.body.recipeId, req.body.userId);
  res.send("successful deletion.");
});


app.post('/deleteIngredForUser', (req, res) => {

  deleteIngredient(req.body.ingredientName, req.body.userId)
  res.send("successful deletion.")
})


app.post('/deletePantryItems', (req, res) => {
  deletePantryItem(req.body.ingredientId, req.body.userId);
  // console.log(req.body.ingredientId, req.body.userId)

  res.send("successful deletion")
})

app.post('/renderGame', (req, res) => {

})

app.post('/load-game', (req, res) => {
  checkingGameExists(req.body.userId)
  .then((response) => {
    if (response.rows.length === 0) {
      // write code if game does not exist
      console.log("did not find game")
      res.send(false)
    }
    else {
      //write code if game exists
      console.log("found game that exists")
      res.send(true)
    }
  })
})

app.post('/voteYes', (req, res) => {
  yesButton(req.body.userId, req.body.recipeId)
  res.send("successful YES vote")
})

app.post('/voteNo', (req, res) => {
  noButton(req.body.userId, req.body.recipeId)
  res.send("successful NO vote")
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
