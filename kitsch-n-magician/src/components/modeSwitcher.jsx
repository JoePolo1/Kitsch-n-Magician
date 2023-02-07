import  React, {Fragment} from "react";
import Sidebarleft from "./Sidebarleft";
import FavouritesView from "./FavouritesView";
import useVisualMode from "../hooks/useVisualMode";

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";


const ModeSwitcher = (props) => {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)

  return(
    <Fragment>
    {mode === RECIPESEARCH && <Sidebarleft />}
    {mode === FAVOURITES && <FavouritesView />}
    </Fragment>
  )
};



export default ModeSwitcher;
