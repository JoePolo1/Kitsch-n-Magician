// Helper functions to parse JSON data and run API queries

export function findRecipeId(data) {
  let result = [];

  for (const recipeId of data) {
    result.push(recipeId["id"]);
  }
  return result;
}

//Function to convert ingredients list to URL for API end point
export function urlconverter(array) {
  const withoutSpaces = [];
  array.map(element => {
    const lowerCase = element.toLowerCase();
    withoutSpaces.push(lowerCase.replace(" ", '%20'));
  });
  return withoutSpaces.join(",+");
}


export function getSelectedRecipe(recipeFavs, recipeTitle) {

  for (let recipe of recipeFavs) {
    if (recipeTitle === recipe.title) {
      return recipe;
    }
  }
}

