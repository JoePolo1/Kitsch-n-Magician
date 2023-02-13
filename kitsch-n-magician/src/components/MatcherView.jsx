import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IngredientListItem from './IngredientListItem';
import { useEffect } from 'react';
import { urlconverter, findRecipeId } from '../helpers/selectors';
import axios from 'axios';
import useToken from '../hooks/useToken';
import MatcherButton from './Buttons/MatcherButton';
import { Paper } from '@mui/material';
import MatcherCard from './Cards/MatcherCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import DayofTheWeek from "./DayofTheWeek";



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
  const [gameCount, setGameCount] = useState(1)
  const [useExisting, setUseExisting] = useState(false)
  // const [mealPrep, setMealPrep] = useState({
  //   title: "Keep Playing to Match",
  //   spoon_url: ""
  // })
  const [mealPrep, setMealPrep] = useState([])



  const findGameExists = function () {
    axios.post('/load-game', { userId: getToken })
      .then((response) =>  {
        if (response.data === false) {
          UseRecipePrimarySearch()
        } else {
          UseExistingGameSearch()
          setUseExisting(true)
        }
      })
  }


  // Function that passes in the ingredient list state to a URL encoded string
  const UseRecipePrimarySearch = function() {

    const ingredientArray = ingredients.map(ingredient => {

      return (
        ingredient.name
      );
    });

    const ingredientUrl = urlconverter(ingredientArray);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_KEY}&ingredients=${ingredientUrl}&number=4&ranking1&ignorePantry=true`;
    

    axios.get(url)
      .then((all) => {
        return findRecipeId(all.data);
      })
      .then((recipeId) => {
        let promiseArr = [];
        for (let x of recipeId) {
          promiseArr.push(axios.get(`https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}&includeNutrition=false`));
        }
        const tempRecipes = []

        Promise.all(promiseArr)

          .then((all) => {
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
            } 
            setRecipes(...recipes, tempRecipes)
            for (let recipe of tempRecipes) {

              axios.post('/matchgame',
                {
                  items: { recipe },
                  userId: getToken
                }
              ).then((response) => {setgameRecipes(response.data)})
          }
      });
  })
};

const UseExistingGameSearch = function() {

  axios.post('/getmygame', {
    userId: getToken
  }
  ).then((response) => {setgameRecipes(response.data)})

}

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


  const gameCards = gameRecipes.map(item => {

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
        recipeId={item.recipe_id}
        setMeal={setMealPrep}
        gameCount={gameCount}
        setGameCount={setGameCount}
        gameRecipesCount={gameRecipes.length}
        useExisting={useExisting}
      />
    );

  });

  const displayMatched = async () => {
    try{
      const response = await axios.post("/matchedcolumn",
      { userId: getToken }
      )
      return response.data
    }catch (err){
      return err;
    }
  }

  useEffect(() => {
    (async () => {
      const result = await displayMatched();
      setMealPrep(result);
      
    })()
  }, []);



  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


  const mapMeal = mealPrep.map((item, index) => {

    return (
    
      <DayofTheWeek
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
        recipeId={item.recipe_id}
        day={dayOfWeek[index]}

      />
    );
  })

  // const mapMeal = dayOfWeek.map((item, index) => {
  //   console.log("items in mealmap", mealPrep[index] )
    

  //   return (
    
  //     <DayofTheWeek
  //       title={mealPrep[index].title}
  //       // ready_in_minutes={mealPrep[index].ready_in_minutes}
  //       // image={mealPrep[index].image}
  //       spoon_url={mealPrep[index].spoon_url}
  //       // servings={mealPrep[index].servings}
  //       // summary={mealPrep[index].summary}
  //       // vegetarian={mealPrep[index].vegetarian}
  //       // vegan={mealPrep[index].vegan}
  //       // gluten_free={mealPrep[index].gluten_free}
  //       // dairy_free={mealPrep[index].dairy_free}
  //       // recipeId={mealPrep[index].recipe_id}
  //       day={item}

  //     />
  //   );
  // })


  const displayPantry = async () => {

    try {
      const response = await axios.post("/mypantry",
        { userId: getToken }
      );
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

            <Box sx={{ flexGrow: 0, 
            width: 239, 
            height: '3.5em', 
            color: "#FFFFFF",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2em'}} bgcolor= '#18588c'>
            <header> My Pantry Items</header>
          </Box>
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
              onClick={findGameExists}
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
     {/* where right column exists */}
    <Divider orientation="vertical" flexItem />
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
            maxHeight: '100%'
          }
        }}
        variant="permanent"
        anchor="right"
      >


    <Box
      sx={{ 
        width: '100%', 
        height: '100%', 
        maxWidth: 250, 
        bgcolor: 'background.paper' 
      }}
    >
      
        <Box sx={{ flexGrow: 0, 
            width: 239, 
            height: '3.5em', 
            color: "#FFFFFF",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2em'}} bgcolor= '#18588c'>
            <header> Household Matches</header></Box>
        <Divider></Divider>

        <List>
          <Drawer
            sx={{
              display: 'flex',

              flexShrink: 0,
              '& .MuiDrawer-paper': {
                mt: '8em',

                boxSizing: 'border-box',
                maxHeight: '80%'
              }
            }}
            variant="permanent"
            anchor="right"
          >
          <Box sx={{ flexGrow: 0, 
            width: 239, 
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flexDirection: 'column',
            fontSize: '1.2em'}} >
              
              {/* <DayofTheWeek 
              /> */}
              {mapMeal}

              

            </Box>
          </Drawer>

        </List>
      
    </Box>
    </Drawer>
    </Box>
  );
}