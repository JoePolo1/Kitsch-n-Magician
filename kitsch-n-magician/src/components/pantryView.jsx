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
import useToken from '../hooks/useToken';
import PantryInput from './PantryInput';
import MatcherButton from './MatcherButton';



const drawerWidth = 240;


export default function PantryView() {


const [ingredients, setIngredients] = useState([]);
const [newIngredient, setNewIngredient] = useState('');
const [recipeId, setRecipeId] = useState();
const [recipes, setRecipes] = useState([]);
const [favouriteTarget, setFavouriteTarget] = useState()
const getToken = useToken().getToken()

// Function that passes in the ingredient list state to a URL encoded string
const UseRecipePrimarySearch = function () {
  
  const ingredientUrl = urlconverter(ingredients);
  console.log('get token is ', getToken)
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
    <IngredientListItem 
    name = {ingredient.name}
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
    
      const displayPantry = async () => {
        
          try {
            const response = await axios.post("/mypantry", 
              {userId: getToken}
            );
            console.log('response is ', response)
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
      
      // return (
      //   <RecipeCard 
      //       title={item.title}
      //       ready_in_minutes={item.ready_in_minutes}
      //       image={item.image}
      //       spoon_url={item.spoon_url}
      //       servings={item.servings}
      //       summary={item.summary}
      //       vegetarian={item.vegetarian}
      //       vegan={item.vegan}
      //       gluten_free={item.gluten_free}
      //       dairy_free={item.dairy_free}
      //       onClick={onClick}
      //   />
      // )
      

   



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
            <PantryInput
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={newIngredient}
            />
                                    
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

        
        {/* {ingredientsList.length === 1 ? null : ingredientsList} */}


      </Box>
    </Box>
  );
}