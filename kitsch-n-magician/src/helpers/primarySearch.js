import * as React from 'react';
import { urlconverter, findRecipeId } from './selectors';
import axios from 'axios';


export function UseRecipePrimarySearch(ingredients, setRecipes) {

  const ingredientUrl = urlconverter(ingredients);
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`;

  axios.get(url)
    .then((all) => {
      return findRecipeId(all.data);
    })
    .then((recipeId) => {
      pullRecipeById(recipeId, setRecipes)
    });

}

export function pullRecipeById(recipeId, setRecipes) {
    let promiseArr = [];
      for (let x of recipeId) {
        promiseArr.push(axios.get(`https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`));
      }
      Promise.all(promiseArr)

        .then((all) => {
          for (let food of all) {
            setRecipes(recipes => ([
              ...recipes,
              {
                title: food.data.title,
                ready_in_minutes: food.data.readyInMinutes,
                image: food.data.image,
                spoon_url: food.data.spoonacularSourceUrl,
                servings: food.data.servings,
                summary: food.data.summary,
                vegetarian: food.data.vegetarian,
                vegan: food.data.vegan,
                gluten_free: food.data.glutenFree,
                dairy_free: food.data.dairyFree
              }
            ]));
          }
        });
    }


