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

// (might need to export htis later)
function findRecipeId (data) {

  let result = [];

  for(const recipeId of data) {
    result.push(recipeId["id"]);
  }
  return result;

}

console.log(`Find Recipe By ID Results are: ${findRecipeId(exampleData)}`)