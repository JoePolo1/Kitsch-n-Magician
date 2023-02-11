import * as React from 'react';
import { useState } from 'react';
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
import RecipeCard from './RecipeCard';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import InputWithIcon from './InputWithIcon';
import IngredientListItem from './IngredientListItem';
import SearchButton from './Button';
import { useEffect } from 'react';
import { urlconverter, findRecipeId } from '../helpers/selectors';
import axios from 'axios';
import useToken from '../hooks/useToken';
import MatcherInput from './MatcherInput';
import MatcherButton from './MatcherButton';
import MatchedColumn from './MatchedColumn';
// TEST IMPORTS
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import NotGlutenFreeIcon from './Icons/NotGlutenFree';
import CardContent from '@mui/material/CardContent';
import VeganIcon from './Icons/Vegan';
import Button from '@mui/material/Button';
import MatcherCard from './MatcherCard';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from '@mui/material/Slide';
import Switch from "@mui/material/Switch";
import NoButton from './Buttons/NoButton';
import YesButton from './Buttons/YesButton';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const drawerWidth = 240;


export default function MatcherView() {


  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [recipeId, setRecipeId] = useState();
  const [recipes, setRecipes] = useState([]);
  const [favouriteTarget, setFavouriteTarget] = useState();
  const getToken = useToken().getToken();
  const [gameRecipes, setgameRecipes] = useState([])

  console.log("ingredients", ingredients);



  // Function that passes in the ingredient list state to a URL encoded string
  const UseRecipePrimarySearch = function() {

    const ingredientArray = ingredients.map(ingredient => {

      return (
        ingredient.name
      );
    });

    const ingredientUrl = urlconverter(ingredientArray);
    console.log('ingredients are ', ingredients.name);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`;


    axios.get(url)
      .then((all) => {
        // console.log(all);
        // console.log("Find recipe ID is ", findRecipeId(all.data));
        return findRecipeId(all.data);
      })
      .then((recipeId) => {
        let promiseArr = [];
        for (let x of recipeId) {
          console.log("X is ", x);
          promiseArr.push(axios.get(`https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`));
        }
        //add axios call for matchgame in the promise array
        const tempRecipes = []

        Promise.all(promiseArr)

          .then((all) => {
            // console.log("then ALL is ", all);
            for (let food of all) {
              tempRecipes.push({
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
              })
              // setRecipes(recipes => ([
              //   ...recipes,
              //   {
              //     title: food.data.title,
              //     ready_in_minutes: food.data.readyInMinutes,
              //     image: food.data.image,
              //     spoon_url: food.data.spoonacularSourceUrl,
              //     servings: food.data.servings,
              //     summary: food.data.summary,
              //     vegetarian: food.data.vegetarian,
              //     vegan: food.data.vegan,
              //     gluten_free: food.data.glutenFree,
              //     dairy_free: food.data.dairyFree
              //   }
              // ]));
            } 
            setRecipes(...recipes, tempRecipes)
            console.log('recipes', tempRecipes);
            for (let recipe of tempRecipes) {

              axios.post('/matchgame',
                {
                  items: { recipe },
                  userId: getToken
                }
              ).then((response) => {setgameRecipes(response.data)})
          }
      });

    axios.post('/load-game', { userId: getToken });

  })
};

  const ingredientsList = ingredients.map(ingredient => {
    return (
      <IngredientListItem
        name={ingredient.name}
      />
    );
  });

  const handleChange = event => {
    setNewIngredient(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIngredients([newIngredient.trim(), ...ingredients]);
    setNewIngredient('');
  };


  // This function maps the details of a recipe and puts them in a recipe card
  // for (let recipe of recipes) {
  //   axios.post('/matchgame',
  //     {
  //       items: { recipe },
  //       userId: getToken
  //     }
  //   ).then((response) => {
  //     console.log('response data is *', response.data);
  //   });
  // }

  const gameCards = gameRecipes.map(item => {


    console.log('items', item);

    axios.post('/matchgame', 
    
    ).then((response) => {
    console.log('response data is *', response.data)
    })

    return (
      <MatcherCard
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

      />
    );

  });



  const displayPantry = async () => {

    try {
      const response = await axios.post("/mypantry",
        { userId: getToken }
      );
      // console.log('response is ', response.data)
      return response.data;
    } catch (err) {
      return err;

    }
  };

  useEffect(() => {
    (async () => {
      const result = await displayPantry();
      setIngredients(result);
    })();
  }, []);

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




      // State to hide the card on clicking Yes or No
  const [checked, setChecked] = useState(true)

  const handleToggle = () => {
    setChecked((prev) => !prev);
  }

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

            {/* <MatcherInput
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={newIngredient}
        /> */}
            <Typography>Your Pantry Items</Typography>
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
            zIndex: 200
          }}>
            <MatcherButton
              onClick={UseRecipePrimarySearch}
              // onClick={console.log("ingredients name", ingredients.name)}
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
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ mb: '1em', maxWidth: 1000 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>Match on meal ideas with your household by selecting below:</Item>
              </Grid>
            </Grid>
          </Box>
          {/* {ingredientsList.length === 1 ? null : ingredientsList} */}
          {/* BEGINNING OF TEST CODE  */}
          {/* <FormControlLabel
          control={<Switch checked={checked} onChange={handleToggle} />}
          label="Show"
          /> */}
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Box>
              {gameCards}
              </Box>
            </Slide>
        </Box>
      </Box>
      <MatchedColumn />

    </Box>
  );
}