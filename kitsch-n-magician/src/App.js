import  React, {Fragment, useState} from "react";
import './App.scss';
import Navbar from './components/Navbar';
import Sidebarleft from './components/Sidebarleft';
import useVisualMode from "./hooks/useVisualMode";
import FavouritesView from "./components/FavouritesView";
import Register from "./components/Register";
import Login from "./components/Login";
import MatcherView from "./components/MatcherView";
import PantryView2 from "./components/PantryView2";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const PANTRY = "PANTRY"
const MATCHER = "MATCHER";

function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)
  const [name, setName] = useState('')

  const theme = createTheme({
    typography: {
      headers:{
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'Lobster',
          'Cassandra',
          'Oleo Script Swash Caps',
          'Open Sans'
        ].join(',')
    }},
  });
  

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar 
      switchFavourites={() => transition(FAVOURITES)} 
      switchLogin={() => transition(LOGIN)} 
      switchLogout={() => transition(LOGOUT)} 
      switchRegister={() => transition(REGISTER)}
      switchMatcher={() => transition(MATCHER)}
      switchPantry={() => transition(PANTRY)}
      name={name}
      setName={setName}
      />
      <Fragment>
        <Box sx={{ backgroundImage:'url(Kitchenware.png)', bgcolor: '#CBF5EF', backgroundSize: '75%', backgroundPosition: 'center' }}>
      {mode === RECIPESEARCH && <Sidebarleft />}
      {mode === FAVOURITES && <FavouritesView />}
      {mode === REGISTER && <Register />}
      {mode === LOGIN && <Login setName={setName} recipeSearch={() => transition(RECIPESEARCH)}/>}
      {mode === LOGOUT && <Sidebarleft />}
      {mode === MATCHER && <MatcherView />}
      {mode === PANTRY && <PantryView2 />}
        </Box>
      </Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;
