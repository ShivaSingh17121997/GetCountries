import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import Navibar from './Components/Navbar/Navibar';
import Route from './Components/Routes/Routing';
import Routing from './Components/Routes/Routing';
import Authentication from './Components/Pages/Authentication';

function App() {
  return (
    <div className="App">
      {/* <Navibar />
      <Routing/> */}
      <Authentication/>
    </div>
  );
}

export default App;
