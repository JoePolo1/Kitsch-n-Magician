// Helper functions to parse JSON data and run API queries

const exampleData = [
  {
    "id": 657011,
    "title": "Potato-Cheese Pie",
    "image": "https://spoonacular.com/recipeImages/657011-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 8,
    "missedIngredients": [
      {
        "id": 2048,
        "amount": 1,
        "unit": "tablespoon",
        "unitLong": "tablespoon",
        "unitShort": "Tbsp",
        "aisle": "Oil, Vinegar, Salad Dressing",
        "name": "apple cider vinegar",
        "original": "1 tablespoon white or apple cider vinegar",
        "originalName": "white or apple cider vinegar",
        "meta": [
          "white"
        ],
        "extendedName": "white apple cider vinegar",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple-cider-vinegar.jpg"
      },
      {
        "id": 18079,
        "amount": 3,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Pasta and Rice",
        "name": "breadcrumbs",
        "original": "3 tablespoons breadcrumbs",
        "originalName": "breadcrumbs",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
      },
      {
        "id": 1012049,
        "amount": 2,
        "unit": "sprigs",
        "unitLong": "sprigs",
        "unitShort": "sprigs",
        "aisle": "Produce",
        "name": "thyme",
        "original": "2 sprigs fresh thyme, leaves stripped",
        "originalName": "fresh thyme, leaves stripped",
        "meta": [
          "fresh"
        ],
        "extendedName": "fresh thyme",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg"
      },
      {
        "id": 1053,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "heavy cream",
        "original": "2 tablespoons heavy cream, for brushing",
        "originalName": "heavy cream, for brushing",
        "meta": [
          "for brushing"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
      },
      {
        "id": 7050,
        "amount": 5,
        "unit": "ounces",
        "unitLong": "ounces",
        "unitShort": "oz",
        "aisle": "Meat",
        "name": "mortadella",
        "original": "5 ounces mortadella or ham, thinly sliced",
        "originalName": "mortadella or ham, thinly sliced",
        "meta": [
          "thinly sliced"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/mortadella.jpg"
      },
      {
        "id": 11282,
        "amount": 1,
        "unit": "large",
        "unitLong": "large",
        "unitShort": "large",
        "aisle": "Produce",
        "name": "onion",
        "original": "1 large onion, thinly sliced",
        "originalName": "onion, thinly sliced",
        "meta": [
          "thinly sliced"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
      },
      {
        "id": 10011355,
        "amount": 1.5,
        "unit": "pounds",
        "unitLong": "pounds",
        "unitShort": "lb",
        "aisle": "Produce",
        "name": "red-skinned potatoes",
        "original": "4 large red-skinned potatoes (1 1/2 pounds), unpeeled",
        "originalName": "large red-skinned potatoes , unpeeled",
        "meta": [
          "unpeeled"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-potatoes.jpg"
      },
      {
        "id": 1145,
        "amount": 1.5,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "butter",
        "original": "1 1/2 cups unsalted butter, cubed (keep cold in the freezer)",
        "originalName": "unsalted butter, cubed (keep cold in the freezer)",
        "meta": [
          "unsalted",
          "cold",
          "cubed",
          "(keep in the freezer)"
        ],
        "extendedName": "unsalted butter",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 1109003,
        "amount": 2,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "gala apples",
        "original": "2 gala apples, unpeeled",
        "originalName": "gala apples, unpeeled",
        "meta": [
          "unpeeled"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
      },
      {
        "id": 1001009,
        "amount": 10,
        "unit": "ounces",
        "unitLong": "ounces",
        "unitShort": "oz",
        "aisle": "Cheese",
        "name": "cheddar cheese",
        "original": "10 ounces white cheddar cheese, shredded",
        "originalName": "white cheddar cheese, shredded",
        "meta": [
          "shredded",
          "white"
        ],
        "extendedName": "white shredded cheddar cheese",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheddar.jpg"
      }
    ],
    "unusedIngredients": [
      {
        "id": 5006,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "chicken",
        "original": "chicken",
        "originalName": "chicken",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
      },
      {
        "id": 23232,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "steak",
        "original": "steak",
        "originalName": "steak",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/ribeye-raw.jpg"
      },
      {
        "id": 15076,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Seafood",
        "name": "salmon",
        "original": "salmon",
        "originalName": "salmon",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png"
      }
    ],
    "likes": 1
  },
  {
    "id": 640352,
    "title": "Cranberry Apple Crisp",
    "image": "https://spoonacular.com/recipeImages/640352-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 9078,
        "amount": 2,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "cranberries",
        "original": "2 cups fresh cranberries",
        "originalName": "fresh cranberries",
        "meta": [
          "fresh"
        ],
        "extendedName": "fresh cranberries",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cranberries.jpg"
      },
      {
        "id": 1145,
        "amount": 4,
        "unit": "Tbs",
        "unitLong": "Tbs",
        "unitShort": "Tbs",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "butter",
        "original": "1/2 stick (4 Tbs) unsalted butter, cut into cubes",
        "originalName": "1/2 stick unsalted butter, cut into cubes",
        "meta": [
          "unsalted",
          "cut into cubes"
        ],
        "extendedName": "unsalted butter",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
      },
      {
        "id": 8120,
        "amount": 1.5,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Cereal",
        "name": "regular oats",
        "original": "1 1/2 cups regular oats (not quick-cooking)",
        "originalName": "regular oats (not quick-cooking)",
        "meta": [
          "(not quick-cooking)"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 1089003,
        "amount": 4,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "granny smith apples",
        "original": "4 cups Granny Smith apples, chopped into ½ inch chunks",
        "originalName": "Granny Smith apples, chopped into ½ inch chunks",
        "meta": [
          "chopped"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png"
      }
    ],
    "unusedIngredients": [
      {
        "id": 5006,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "chicken",
        "original": "chicken",
        "originalName": "chicken",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
      },
      {
        "id": 1009,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Cheese",
        "name": "cheddar",
        "original": "cheddar",
        "originalName": "cheddar",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
      },
      {
        "id": 23232,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "steak",
        "original": "steak",
        "originalName": "steak",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/ribeye-raw.jpg"
      },
      {
        "id": 15076,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Seafood",
        "name": "salmon",
        "original": "salmon",
        "originalName": "salmon",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png"
      }
    ],
    "likes": 11
  },
  {
    "id": 641803,
    "title": "Easy & Delish! ~ Apple Crumble",
    "image": "https://spoonacular.com/recipeImages/641803-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 1001,
        "amount": 0.75,
        "unit": "stick",
        "unitLong": "sticks",
        "unitShort": "stick",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "butter",
        "original": "3/4 stick of butter",
        "originalName": "butter",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
      },
      {
        "id": 2011,
        "amount": 1,
        "unit": "Dash",
        "unitLong": "Dash",
        "unitShort": "Dash",
        "aisle": "Spices and Seasonings",
        "name": "ground cloves",
        "original": "Dash of ground cloves",
        "originalName": "ground cloves",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cloves.jpg"
      },
      {
        "id": 9156,
        "amount": 1,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "lemon zest",
        "original": "1 Zest of lemon",
        "originalName": "Zest of lemon",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 9003,
        "amount": 3,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "apples",
        "original": "3 apples – sliced",
        "originalName": "apples – sliced",
        "meta": [
          "sliced"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
      }
    ],
    "unusedIngredients": [
      {
        "id": 5006,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "chicken",
        "original": "chicken",
        "originalName": "chicken",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
      },
      {
        "id": 1009,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Cheese",
        "name": "cheddar",
        "original": "cheddar",
        "originalName": "cheddar",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
      },
      {
        "id": 23232,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Meat",
        "name": "steak",
        "original": "steak",
        "originalName": "steak",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/ribeye-raw.jpg"
      },
      {
        "id": 15076,
        "amount": 1,
        "unit": "serving",
        "unitLong": "serving",
        "unitShort": "serving",
        "aisle": "Seafood",
        "name": "salmon",
        "original": "salmon",
        "originalName": "salmon",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.png"
      }
    ],
    "likes": 1
  }
]

const exampleRecipeReturned = {
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
}

// (might need to export htis later)
function findRecipeId (data) {

  let result = [];

  for(const recipeId of data) {
    result.push(recipeId["id"]);
  }
  return result;

}

function findRecipeInfo()

console.log(`Find Recipe By ID Results are: ${findRecipeId(exampleData)}`)