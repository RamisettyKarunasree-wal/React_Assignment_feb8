import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Average from './Average';
import AddNos from './AddNos';
import MiniCalculator from './MiniCalculator';
function App() {
  return (
    <div className="App">
      <h1>Assignments Feb8</h1>
      <Todo></Todo>
      <Average></Average>
      <AddNos num1={10} num2={22}></AddNos>
      <MiniCalculator num1={10} num2={5} operation="divide"></MiniCalculator>
    </div>
  );
}

export default App;
