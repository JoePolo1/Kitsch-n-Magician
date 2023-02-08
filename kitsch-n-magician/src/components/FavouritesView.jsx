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
import FavouritesListItem from './FavouritesListItem'
import { faSignalPerfect } from '@fortawesome/free-solid-svg-icons';


const drawerWidth = 240;



export default function FavouritesView() {

const displayFavs = () => {
  axios.get("http://localhost:3001/myrecipes").then((response) => {
    // useToken().setToken(response.data.rows[0].id)
    console.log('myrecipes data ', response.data);
    // console.log('session id is ', sessionId)
    // req.session.userId = sessionId
    
  })
}


// Function that passes in the ingredient list state to a URL encoded string



    // This function maps the details of a recipe and puts them in a recipe card
    // const recipeItemList = recipes.map(item =>  {
      
    //   return (
    //     <RecipeCard 
    //         title={item.title}
    //         readyInMinutes={item.readyInMinutes}
    //         image={item.image}
    //         spoonacularSourceUrl={item.spoonacularSourceUrl}
    //         servings={item.servings}
    //         summary={item.summary}
    //     />
    //   )
      
    // })
   



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

        <Box sx={{ flexGrow: 0, 
          width: 239, 
          height: '3.5em', 
          color: "#FFFFFF",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2em'}} bgcolor= '#18588c'>
          <header> My Saved Recipes</header>
        </Box>

        <List>
          <Drawer
            sx={{
              display: 'flex',

              flexShrink: 0,
              '& .MuiDrawer-paper': {
                mt: '8em',

                boxSizing: 'border-box',
                maxHeight: '90%'
              }
            }}
            variant="permanent"
            anchor="left"
          >
                                    
                              {/* {favouritesList} */}
        </Drawer>
        
        </List>
        
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

        {/* {favouritesList} */}


      </Box>
    </Box>
  );
}