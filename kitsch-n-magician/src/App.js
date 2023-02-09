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

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const MATCHER = "MATCHER";



function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)

  // if (!token) {
    
  // }



  return (
    <div>
      <Navbar 
      switchFavourites={() => transition(FAVOURITES)} 
      switchLogin={() => transition(LOGIN)} 
      switchLogout={() => transition(LOGOUT)} 
      switchRegister={() => transition(REGISTER)}
      switchMatcher={() => transition(MATCHER)}
      />
      <Fragment>
      {mode === RECIPESEARCH && <Sidebarleft />}
      {mode === FAVOURITES && <FavouritesView />}
      {mode === REGISTER && <Register />}
      {mode === LOGIN && <Login />}
      {mode === LOGOUT && <Sidebarleft />}
      {mode === MATCHER && <MatcherView />}

      </Fragment>
    </div>
  );
}

export default App;
