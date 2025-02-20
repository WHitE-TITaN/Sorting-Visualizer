import './App.css';
import newBar from './userInput';
import Graph from './components/Graph';

function App() {

  return (
    <div className="App">


      <div className='input'>
        <input id = 'array' placeholder='Pls enter array !'></input>
        <button id = 'submmit' onClick={newBar}>GENERATE</button>
      </div>



      <div className='MainGraph'>
        <Graph></Graph>
      </div>
    </div>
  );
}
export default App;

