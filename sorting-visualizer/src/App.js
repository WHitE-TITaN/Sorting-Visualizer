import './App.css';
import newBar from './userInput';
import Graph from './components/Graph';

function App() {

  return (
    <div className="App">
        <input id = 'array' placeholder='Pls enter array !'></input>
        <button id = 'submmit' onClick={newBar}>GENERATE</button>
        <hr></hr>
      <Graph></Graph>
    </div>
  );
}
export default App;

