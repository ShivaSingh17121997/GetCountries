import './App.css';
import SetInterval from './Components/SetInterval';
import Todo from './Components/Todo';
import Toggle from './Components/Toggle';
import Toggle2 from './Components/Toggle2';
import UseRef from "./Components/UseRef"

function App() {
  return (
    <div className="App">
      <div>
        {/* <h1>Todo App</h1>
        <Todo />
        <Toggle />
        <Toggle2 />
        <SetInterval/> */}
        <UseRef />
      </div>
    </div>
  );
}

export default App;
