import * as React from "react";
import axios from "axios";
import useToken from "../hooks/useToken";
import { Fragment } from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import RecipeCard from "./Cards/RecipeCard";
import InputWithIcon from "./InputWithIcon";
import IngredientListItem from "./IngredientListItem";
import SearchButton from "./Buttons/Button";

import { urlconverter, findRecipeId } from "../helpers/selectors";

const drawerWidth = 240;

export default function Sidebarleft() {
  //our states used to hold our recipe and user info

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const getToken = useToken().getToken(); //userId info

  // Function that passes in the ingredient list state to a URL encoded string
  const UseRecipePrimarySearch = function () {
    const ingredientUrl = urlconverter(ingredients);

    //call to api which returns ingredient id's
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`;

    axios
      .get(url)
      .then((all) => {
        return findRecipeId(all.data);
      })
      //second api call retrieving full ingredient details based on returned id's from previous call
      .then((recipeId) => {
        let promiseArr = [];
        for (let x of recipeId) {
          promiseArr.push(
            axios.get(
              `https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`
            )
          );
        }
        Promise.all(promiseArr)
          //recipes are then added to recipes state to be rendered.
          .then((all) => {
            for (let food of all) {
              setRecipes((recipes) => [
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
                  dairy_free: food.data.dairyFree,
                },
              ]);
            }
          });
      });
  };

  //maps typed in ingredients and renders on page
  const ingredientsList = ingredients.map((ingredient, index) => {
    return (
      <IngredientListItem
        key={index}
        name={ingredient}
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    );
  });

  //sets new ingredients to state when user types in ingredients
  const handleChange = (event) => {
    setNewIngredient(event.target.value);
  };

  //ingredients set to state and stored in the database
  const handleSubmit = (event) => {
    event.preventDefault();
    setIngredients([newIngredient.trim(), ...ingredients]);
    axios
      .post("/myingredients", {
        userId: getToken,
        ingredient: newIngredient,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    setNewIngredient("");
  };

  // This function maps the details of a recipe and renders them in a recipe card
  const recipeItemList = recipes.map((item, index) => {
    const onClick = (event) => {
      event.preventDefault();
      try {
        const response = axios.post("/myfavs", {
          items: { item },
          userId: getToken,
        });
        return response.data;
      } catch (err) {
        return err;
      }
    };

    return (
      <RecipeCard
        key={index}
        title={item.title}
        ready_in_minutes={item.ready_in_minutes}
        image={item.image}
        spoon_url={item.spoon_url}
        servings={item.servings}
        summary={item.summary}
        vegetarian={item.vegetarian}
        vegan={item.vegan}
        gluten_free={item.gluten_free}
        dairy_free={item.dairy_free}
        onClick={onClick}
      />
    );
  });

  //  Sidebar lower rendering
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>

      <Drawer
        sx={{
          display: "flex",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            mt: "4.3em",
            width: drawerWidth,
            boxSizing: "border-box",
            height: "100vh",
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* THIS BOX DIV CONTAINS BOTH INGREDIENT LIST AND SEARCH BUTTON */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "95vh",
            bgcolor: "#88e3d3",
            fontFamily: 'orienta',
          }}
        >
          {/* THIS BOX DIV CONTAINS ONLY INGREDIENTS LIST AND TEXT INPUT.
        MaxHeight fixes scroll button pushing */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              height: "25vh",
              fontFamily: 'orienta',
            }}
          >
            {/* handles input field actions */}
            <InputWithIcon
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={newIngredient}
            />
            <List>
              <Drawer
                sx={{
                  display: "flex",
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    mt: "8em",
                    boxSizing: "border-box",
                    maxHeight: "58%",
                    bgcolor: "#88e3d3",
                    fontFamily: 'orienta',
                  },
                }}
                variant="permanent"
                anchor="left"
              >
                {ingredientsList}
              </Drawer>
            </List>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              zIndex: 200,
              height: "90vh",
            }}
          >
            {/* calls api call when button is clicked */}
            <SearchButton
              onClick={UseRecipePrimarySearch}
              sx={{ zIndex: 9000 }}
            />
          </Box>
          {/* END OF INGREDIENT LIST */}
          <Divider />
          <Box sx={{ mb: "4em", bgcolor: "#FFFFFF" }}></Box>
          {/* END OF  BOX DIV CONTAINING BOTH INGREDIENT LIST AND SEARCH BUTTON */}
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          bgcolor: "#CBF5EF",
          p: 3,
          minHeight: 1300,
          backgroundImage: "url(Kitchenware.png)",
          bgcolor: "#CBF5EF",
          backgroundSize: "105%",
          backgroundPosition: "center",
        }}
      >
        {/* END OF LEFT NAV/BEGINNING OF MAIN CONTAINER */}

        {/* ternay that renders logo if there are no recipes in state */}
        <Toolbar />
        {recipeItemList.length === 0 ? (
          <Fragment>
            <Box sx={{ display: "flex", alignContent: "center" }}>
              <img
                src="Title.png"
                alt="logocard"
                width="100%"
                display="flex"
                align-items="center"
              ></img>
            </Box>
          </Fragment>
        ) : null}

        {/* ternay that renders recipes if there recipes in state */}
        {recipeItemList.length === 1 ? null : recipeItemList}
      </Box>
    </Box>
  );
}
