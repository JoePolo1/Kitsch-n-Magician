import  React, {Fragment} from "react";
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebarleft from './components/Sidebarleft';
import ModeSwitcher from './components/modeSwitcher';
import useVisualMode from "./hooks/useVisualMode";
import FavouritesView from "./components/FavouritesView";
import Register from "./components/Register";
import Login from "./components/Login";
import {Link, Route, Routes} from 'react-router-dom';

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const MATCHER = "MATCHER";



function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)


  return (
    <div>
      <Navbar 
        transition={transition}
      // switchFavourites={() => transition(FAVOURITES)} 
      // switchLogin={() => transition(LOGIN)} 
      // switchLogout={() => transition(LOGOUT)} 
      // switchRegister={() => transition(REGISTER)}
      />
      <Fragment>
      {![LOGIN, REGISTER].includes(mode) && <Sidebarleft />}
      {/* {mode === FAVOURITES && <FavouritesView />}
      {mode === REGISTER && <Register />}
      {mode === LOGOUT && <Sidebarleft />}  */}

      </Fragment>
    </div>
  );
}

export default App;
