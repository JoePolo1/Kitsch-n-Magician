import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebarleft from './components/Sidebarleft';
import ModeSwitcher from './components/modeSwitcher';



function App() {
  
  return (
    <div>
      <Navbar />
      {/* <Sidebarleft /> */}
      <ModeSwitcher />
    </div>
  );
}

export default App;
