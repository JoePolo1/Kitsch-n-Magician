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

const FAVOURITES = "FAVOURITES";
const RECIPESEARCH = "RECIPESEARCH";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const MATCHER = "MATCHER";



function App() {
  const { mode, transition, back } = useVisualMode(RECIPESEARCH)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState("");


  return (
    <div>
      <Navbar 
      switchFavourites={() => transition(FAVOURITES)} 
      switchLogin={() => transition(LOGIN)} 
      switchLogout={() => transition(LOGOUT)} 
      switchRegister={() => transition(REGISTER)}
      />
      <Fragment>
      {mode === RECIPESEARCH && <Sidebarleft />}
      {mode === FAVOURITES && <FavouritesView />}
      {mode === REGISTER && <Register />}
      {mode === LOGIN && <Login />}
      {mode === LOGOUT && <Sidebarleft />}

      </Fragment>
    </div>
  );
}

export default App;
