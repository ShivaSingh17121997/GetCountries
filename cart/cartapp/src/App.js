import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import Crud from './Pages/Crud';
import CreateCard from './Pages/CreateCard';
import ThemeToggleButton from './Pages/ThemeToggleButton';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Crud/> */}
      {/* <CreateCard/> */}
      <ThemeToggleButton/>
    </div>
  );
}

export default App;
