import './App.css';
import Graph from './components/Graph';

function App() {

  return (
    <div className="App">


      <div className='input'>
        <input id = 'array' placeholder='Pls enter array !'></input>
        <button id = 'submmit'>GENERATE</button>
       
      </div>
      <Graph />
    </div>
  );
}
export default App;

