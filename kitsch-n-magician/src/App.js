import  React, {Fragment, useState} from "react";
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebarleft from './components/Sidebarleft';
import ModeSwitcher from './components/modeSwitcher';
import useVisualMode from "./hooks/useVisualMode";
import FavouritesView from "./components/FavouritesView";
import Register from "./components/Register";
import Login from "./components/Login";
import useToken from './hooks/useToken';
import MatcherView from "./components/MatcherView";
import PantryView2 from "./components/PantryView2";
import { Box } from "@mui/system";


const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const PANTRY = "PANTRY"
const MATCHER = "MATCHER";
const DELETE = "DELETE";
const ADD = "ADD";



function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)
  const [name, setName] = useState('')
  



  return (
    <div>
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
      {mode === LOGIN && <Login setName={setName} />}
      {mode === LOGOUT && <Sidebarleft />}
      {mode === MATCHER && <MatcherView />}
      {mode === PANTRY && <PantryView2 />}
        </Box>
      </Fragment>
    </div>
  );
}

export default App;
