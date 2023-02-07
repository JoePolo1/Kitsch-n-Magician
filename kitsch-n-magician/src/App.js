import  React, {Fragment} from "react";
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebarleft from './components/Sidebarleft';
import ModeSwitcher from './components/modeSwitcher';
import useVisualMode from "./hooks/useVisualMode";
import FavouritesView from "./components/FavouritesView";

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";



function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)


  return (
    <div>
      <Navbar switch={() => transition(FAVOURITES)} />
      <Fragment>
      {mode === RECIPESEARCH && <Sidebarleft />}
      {mode === FAVOURITES && <FavouritesView />}
      </Fragment>
    </div>
  );
}

export default App;
