import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { urlconverter, findRecipeId } from '../helpers/selectors';
import axios from 'axios';
import useToken from '../hooks/useToken';
import PantryInput from './PantryInput';
import MatcherButton from './Buttons/MatcherButton';
import PantryListItem from './PantryListItem';



const drawerWidth = 240;


export default function PantryView(props) {


const [ingredients, setIngredients] = useState([]);
const [newIngredient, setNewIngredient] = useState('');
const [recipeId, setRecipeId] = useState();
const [recipes, setRecipes] = useState([]);
const [favouriteTarget, setFavouriteTarget] = useState()
const getToken = useToken().getToken()

// Function that passes in the ingredient list state to a URL encoded string
const UseRecipePrimarySearch = function () {
  
  const ingredientUrl = urlconverter(ingredients);
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`


    axios.get(url)
      .then((all) => {
        return findRecipeId(all.data)
      })
      .then((recipeId) => {
        let promiseArr = [];
        for (let x of recipeId) {
          promiseArr.push(axios.get(`https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`))
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
            ]))
          }
        })
      })
}



const ingredientsList = ingredients.map(ingredient => {
  return (
    <PantryListItem 
    name = {ingredient.name}
    id = {ingredient.id}
    userId = {getToken}
    setIngredients={setIngredients}
    />
  )
})

const handleChange = event => {
  setNewIngredient(event.target.value);
};

const handleSubmit = event => {
  event.preventDefault()
  axios.post('/myingredients', {
    userId: getToken,
    ingredient: newIngredient
  }).then(() => {
    setIngredients((prev) =>[{name : newIngredient}, ...prev])
    setNewIngredient('')
  })
  .catch((error) => {
    return error
  })
}



    // This function maps the details of a recipe and puts them in a recipe card
    
      const displayPantry = async () => {
        
          try {
            const response = await axios.post("/mypantry", 
              {userId: getToken}
            );
            return response.data;
          } catch (err) {
            return err;
          }
      }

      useEffect(() => {
        (async () => {
          const result = await displayPantry();
          setIngredients(result)
        })()
      }, [])




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
            width: drawerWidth,
            boxSizing: 'border-box',
            maxHeight: '90%'
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
        height: 900
      }}>

        {/* THIS BOX DIV CONTAINS ONLY INGREDIENTS LIST AND TEXT INPUT.
        MaxHeight fixes scroll button pushing */}
        <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        height: '90%'
        }}> 
          <PantryInput
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={newIngredient}
            />
        
        <List>
          <Drawer
            sx={{
              display: 'flex',
              
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                mt: '8em',
                
                boxSizing: 'border-box',
                maxHeight: '58%'
              }
            }}
            variant="permanent"
            anchor="left"
          >
        
                                    
                              {ingredientsList}
        </Drawer>
        
        </List>
        
        </Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex:200
          }}>
            <MatcherButton
            onClick={UseRecipePrimarySearch}
            sx={{ zIndex: 9000 }}
            />
          </Box>
        {/* END OF INGREDIENT LIST */}
        <Divider />

        {/* END OF  BOX DIV CONTAINING BOTH INGREDIENT LIST AND SEARCH BUTTON */}
        
        </Box>
      </Drawer>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        {/* END OF LEFT NAV/BEGINNING OF MAIN CONTAINER */}
        
        <Toolbar />
      </Box>
    </Box>
  );
}