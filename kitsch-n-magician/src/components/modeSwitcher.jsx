import  React, {Fragment} from "react";
import Sidebarleft from "./Sidebarleft";
import FavouritesView from "./FavouritesView";
import useVisualMode from "../hooks/useVisualMode";

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";


const ModeSwitcher = (props) => {
  const { mode, transition, back } = useVisualMode(FAVOURITES)

  function visitfavourites () {
    transition(FAVOURITES);
  };

  return(
    <Fragment>
    {mode === RECIPESEARCH && <Sidebarleft onSwitch={() => transition(FAVOURITES)} />}
    {mode === FAVOURITES && <FavouritesView />}
    </Fragment>
  )
};



export default ModeSwitcher;
