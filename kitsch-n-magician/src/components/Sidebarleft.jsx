import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RecipeCard from './RecipeCard'
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import InputWithIcon from './InputWithIcon';
import IngredientListItem from './IngredientListItem';
import SearchButton from './Button';
import { useEffect } from 'react';
import { urlconverter, findRecipeId } from '../helpers/selectors';
import axios from 'axios';







const drawerWidth = 240;



export default function Sidebarleft() {

// let ingredientsArr = ["bread", "eggs", "salt"]; 

const exampleRecipeReturned = [{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 25,
  "gaps": "no",
  "preparationMinutes": 5,
  "cookingMinutes": 240,
  "aggregateLikes": 0,
  "healthScore": 15,
  "creditsText": "Food.com",
  "sourceName": "Food.com",
  "pricePerServing": 264.44,
  "extendedIngredients": [
    {
      "id": 9016,
      "aisle": "Beverages",
      "image": "apple-juice.jpg",
      "consistency": "LIQUID",
      "name": "apple juice",
      "nameClean": "apple juice",
      "original": "1/2 cup apple juice",
      "originalName": "apple juice",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 9003,
      "aisle": "Produce",
      "image": "apple.jpg",
      "consistency": "SOLID",
      "name": "cooking apples",
      "nameClean": "apple",
      "original": "3 cooking apples (thickly sliced)",
      "originalName": "cooking apples (thickly sliced)",
      "amount": 3,
      "unit": "",
      "meta": [
        "sliced",
        "(thickly )"
      ],
      "measures": {
        "us": {
          "amount": 3,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 3,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "pepper",
      "nameClean": "black pepper",
      "original": "1/2 teaspoon black pepper",
      "originalName": "black pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 19334,
      "aisle": "Baking",
      "image": "light-brown-sugar.jpg",
      "consistency": "SOLID",
      "name": "brown sugar",
      "nameClean": "golden brown sugar",
      "original": "1/2 cup brown sugar",
      "originalName": "brown sugar",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "1 onion (sliced)",
      "originalName": "onion (sliced)",
      "amount": 1,
      "unit": "",
      "meta": [
        "sliced",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 11112,
      "aisle": "Produce",
      "image": "red-cabbage.png",
      "consistency": "SOLID",
      "name": "cabbage",
      "nameClean": "red cabbage",
      "original": "1/2 head red cabbage (shredded)",
      "originalName": "red cabbage (shredded)",
      "amount": 0.5,
      "unit": "head",
      "meta": [
        "shredded",
        "red",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "head",
          "unitLong": "heads"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "head",
          "unitLong": "heads"
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "salt",
      "nameClean": "table salt",
      "original": "1 teaspoon salt",
      "originalName": "salt",
      "amount": 1,
      "unit": "teaspoon",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": 7916,
      "aisle": "Meat",
      "image": "smoked-sausage.jpg",
      "consistency": "SOLID",
      "name": "sausage",
      "nameClean": "smoked sausage",
      "original": "1 1/2 lbs smoked sausage (cut into 2 inch lengths)",
      "originalName": "smoked sausage (cut into 2 inch lengths)",
      "amount": 1.5,
      "unit": "lbs",
      "meta": [
        "smoked",
        "cut into 2 inch lengths)"
      ],
      "measures": {
        "us": {
          "amount": 1.5,
          "unitShort": "lb",
          "unitLong": "pounds"
        },
        "metric": {
          "amount": 680.389,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }
  ],
  "id": 93723,
  "title": "Smoked Sausage with Cabbage and Apples",
  "readyInMinutes": 245,
  "servings": 4,
  "sourceUrl": "http://www.food.com/recipe/smoked-sausage-with-cabbage-and-apples-86159",
  "image": "https://spoonacular.com/recipeImages/93723-556x370.jpg",
  "imageType": "jpg",
  "summary": "Smoked Sausage with Cabbage and Apples is a <b>gluten free and dairy free</b> recipe with 4 servings. One serving contains <b>746 calories</b>, <b>23g of protein</b>, and <b>46g of fat</b>. For <b>$2.64 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. It works well as a budget friendly main course. It is brought to you by Food.com. If you have apple juice, cabbage, pepper, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>4 hours and 5 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 53%</b>. <a href=\"https://spoonacular.com/recipes/smoked-chicken-sausage-with-apples-cabbage-94330\">Smoked Chicken Sausage With Apples & Cabbage</a>, <a href=\"https://spoonacular.com/recipes/sausage-with-cabbage-and-apples-1073778\">Sausage with Cabbage and Apples</a>, and <a href=\"https://spoonacular.com/recipes/sausage-with-cabbage-and-apples-1370109\">Sausage with Cabbage and Apples</a> are very similar to this recipe.",
  "cuisines": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "gluten free",
    "dairy free"
  ],
  "occasions": [],
  "winePairing": {
    "pairedWines": [],
    "pairingText": "",
    "productMatches": []
  },
  "instructions": null,
  "analyzedInstructions": [],
  "originalId": null
},{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 25,
  "gaps": "no",
  "preparationMinutes": 5,
  "cookingMinutes": 240,
  "aggregateLikes": 0,
  "healthScore": 15,
  "creditsText": "Food.com",
  "sourceName": "Food.com",
  "pricePerServing": 264.44,
  "extendedIngredients": [
    {
      "id": 9016,
      "aisle": "Beverages",
      "image": "apple-juice.jpg",
      "consistency": "LIQUID",
      "name": "apple juice",
      "nameClean": "apple juice",
      "original": "1/2 cup apple juice",
      "originalName": "apple juice",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 9003,
      "aisle": "Produce",
      "image": "apple.jpg",
      "consistency": "SOLID",
      "name": "cooking apples",
      "nameClean": "apple",
      "original": "3 cooking apples (thickly sliced)",
      "originalName": "cooking apples (thickly sliced)",
      "amount": 3,
      "unit": "",
      "meta": [
        "sliced",
        "(thickly )"
      ],
      "measures": {
        "us": {
          "amount": 3,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 3,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 1002030,
      "aisle": "Spices and Seasonings",
      "image": "pepper.jpg",
      "consistency": "SOLID",
      "name": "pepper",
      "nameClean": "black pepper",
      "original": "1/2 teaspoon black pepper",
      "originalName": "black pepper",
      "amount": 0.5,
      "unit": "teaspoon",
      "meta": [
        "black"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 19334,
      "aisle": "Baking",
      "image": "light-brown-sugar.jpg",
      "consistency": "SOLID",
      "name": "brown sugar",
      "nameClean": "golden brown sugar",
      "original": "1/2 cup brown sugar",
      "originalName": "brown sugar",
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "ml",
          "unitLong": "milliliters"
        }
      }
    },
    {
      "id": 11282,
      "aisle": "Produce",
      "image": "brown-onion.png",
      "consistency": "SOLID",
      "name": "onion",
      "nameClean": "onion",
      "original": "1 onion (sliced)",
      "originalName": "onion (sliced)",
      "amount": 1,
      "unit": "",
      "meta": [
        "sliced",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 1,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 11112,
      "aisle": "Produce",
      "image": "red-cabbage.png",
      "consistency": "SOLID",
      "name": "cabbage",
      "nameClean": "red cabbage",
      "original": "1/2 head red cabbage (shredded)",
      "originalName": "red cabbage (shredded)",
      "amount": 0.5,
      "unit": "head",
      "meta": [
        "shredded",
        "red",
        "()"
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "head",
          "unitLong": "heads"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "head",
          "unitLong": "heads"
        }
      }
    },
    {
      "id": 2047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consistency": "SOLID",
      "name": "salt",
      "nameClean": "table salt",
      "original": "1 teaspoon salt",
      "originalName": "salt",
      "amount": 1,
      "unit": "teaspoon",
      "meta": [],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    },
    {
      "id": 7916,
      "aisle": "Meat",
      "image": "smoked-sausage.jpg",
      "consistency": "SOLID",
      "name": "sausage",
      "nameClean": "smoked sausage",
      "original": "1 1/2 lbs smoked sausage (cut into 2 inch lengths)",
      "originalName": "smoked sausage (cut into 2 inch lengths)",
      "amount": 1.5,
      "unit": "lbs",
      "meta": [
        "smoked",
        "cut into 2 inch lengths)"
      ],
      "measures": {
        "us": {
          "amount": 1.5,
          "unitShort": "lb",
          "unitLong": "pounds"
        },
        "metric": {
          "amount": 680.389,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }
  ],
  "id": 93723,
  "title": "Smoked Sausage with Cabbage and Apples",
  "readyInMinutes": 245,
  "servings": 4,
  "sourceUrl": "http://www.food.com/recipe/smoked-sausage-with-cabbage-and-apples-86159",
  "image": "https://spoonacular.com/recipeImages/93723-556x370.jpg",
  "imageType": "jpg",
  "summary": "Smoked Sausage with Cabbage and Apples is a <b>gluten free and dairy free</b> recipe with 4 servings. One serving contains <b>746 calories</b>, <b>23g of protein</b>, and <b>46g of fat</b>. For <b>$2.64 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. It works well as a budget friendly main course. It is brought to you by Food.com. If you have apple juice, cabbage, pepper, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>4 hours and 5 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 53%</b>. <a href=\"https://spoonacular.com/recipes/smoked-chicken-sausage-with-apples-cabbage-94330\">Smoked Chicken Sausage With Apples & Cabbage</a>, <a href=\"https://spoonacular.com/recipes/sausage-with-cabbage-and-apples-1073778\">Sausage with Cabbage and Apples</a>, and <a href=\"https://spoonacular.com/recipes/sausage-with-cabbage-and-apples-1370109\">Sausage with Cabbage and Apples</a> are very similar to this recipe.",
  "cuisines": [],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "gluten free",
    "dairy free"
  ],
  "occasions": [],
  "winePairing": {
    "pairedWines": [],
    "pairingText": "",
    "productMatches": []
  },
  "instructions": null,
  "analyzedInstructions": [],
  "originalId": null
}]

const [ingredients, setIngredients] = useState([]);
const [newIngredient, setNewIngredient] = useState('');
const [recipeId, setRecipeId] = useState();
const [recipes, setRecipes] = useState([]);


// Function that passes in the ingredient list state to a URL encoded string
const UseRecipePrimarySearch = function () {
  
  const ingredientUrl = urlconverter(ingredients);
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`


    axios.get(url)
      .then((all) => {
        console.log(all)
        console.log("Find recipe ID is ", findRecipeId(all.data))
        return findRecipeId(all.data)
      })
      .then((recipeId) => {
        let promiseArr = [];
        for (let x of recipeId) {
          console.log("X is ", x)
          promiseArr.push(axios.get(`https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`))
        }
        Promise.all(promiseArr)

        .then((all) => {
          console.log("then ALL is ", all);
          for (let food of all) {
            setRecipes(recipes => ([
              ...recipes,
              {
              title: food.data.title,
              readyInMinutes: food.data.readyInMinutes,
              image: food.data.image,
              spoonacularSourceUrl: food.data.spoonacularSourceUrl,
              servings: food.data.servings,
              summary: food.data.summary
            }
            ]))
          }
        })
      })
}


const ingredientsList = ingredients.map(ingredient => {
  return (
    <IngredientListItem 
    name = {ingredient}
    />
  )
})

const handleChange = event => {
  setNewIngredient(event.target.value);
};

const handleSubmit = event => {
  event.preventDefault()
  setIngredients([newIngredient.trim(), ...ingredients])
  setNewIngredient('')
}



    // This function maps the details of a recipe and puts them in a recipe card
    const recipeItemList = recipes.map(item =>  {
      
      return (
        <RecipeCard 
            title={item.title}
            readyInMinutes={item.readyInMinutes}
            image={item.image}
            spoonacularSourceUrl={item.spoonacularSourceUrl}
            servings={item.servings}
            summary={item.summary}
        />
      )
      
    })
    console.log("recipe item list is ", recipeItemList)



//  Sidebar lower rendering
  return (
    <Box sx={{ 
      display: 'flex'
      }}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >

      </AppBar>
      
      <Drawer
        sx={{
          display: 'flex',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            mt: '4.3em',
            mb: '10em',
            pb: '10em',
            width: drawerWidth,
            boxSizing: 'border-box',
          }
        }}
        variant="permanent"
        anchor="left"
      >
        {/* THIS BOX DIV CONTAINS BOTH INGREDIENT LIST AND SEARCH BUTTON */}
        <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
        height: 903
      }}>

        {/* THIS BOX DIV CONTAINS ONLY INGREDIENTS LIST AND TEXT INPUT.
        MaxHeight fixes scroll button pushing */}
        <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        maxHeight: 0.5,
        height: '75%'
        }}> 
        
        <InputWithIcon
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={newIngredient}
        />
        <List>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: 'cornflowerblue'
          }}>
            <SearchButton
            onClick={UseRecipePrimarySearch}
            />
          </Box>
        {ingredientsList}
        
        </List>
        </Box>
        {/* END OF INGREDIENT LIST */}
        <Divider />
        {/* BEGINNING OF SEARCH RECIPES BUTTON */}
        <List           
          sx={{
            display: 'flex',
            position:'sticky',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'cornflowerblue'
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position:'fixed',
            justifyContent: 'flex-end',
            backgroundColor: 'cornflowerblue',
            marginBottom: 20
          }}>
            <SearchButton
            onClick={UseRecipePrimarySearch}
            />
          </Box> {/* END OF  BOX DIV CONTAINING BOTH INGREDIENT LIST AND SEARCH BUTTON */}
        </List>
        </Box>
      </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        {/* END OF LEFT NAV/BEGINNING OF MAIN CONTAINER */}
        
        <Toolbar />

        
        {recipeItemList.length === 1 ? null : recipeItemList}


      </Box>
    </Box>
  );
}