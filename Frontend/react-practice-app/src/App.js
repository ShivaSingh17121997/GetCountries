import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <div className="App">
     <Signup/>
     <Login/>
     <TodoPage/>
    </div>
  );
}

export default App;
