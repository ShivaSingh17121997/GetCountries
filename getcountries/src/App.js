import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import Navibar from './Components/Navbar/Navibar';
import Route from './Components/Routes/Routing';
import Routing from './Components/Routes/Routing';
import Authentication from './Components/Pages/Authentication';
import Login from './Components/Pages/Login';
import CartPage from './Components/Pages/CartPage';

function App() {
  return (
    <div className="App">
      {/* <Navibar />
      <Routing/> */}
      {/* <Authentication/> */}
      {/* <Login/> */}
      <CartPage/>
    </div>
  );
}

export default App;
