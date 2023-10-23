import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const[count,setcount] = useState(0);


  function clickIncreaseHandler(){
    setcount(count+1);
  }

  function clickDecreaseHandler(){
    setcount(count-1);
  }

  function resetHandler(){
    setcount(0);
  }

  return (
   <div className="head">

    <div className="action">Increment && Decrement</div>

    <div className="operation">

      <button onClick={clickDecreaseHandler} className="sub">
      -
      </button>

      <div className="value">
        {count}
      </div>

      <button onClick={clickIncreaseHandler} className="add">
         +
      </button>

    </div>

    <button onClick={resetHandler} className="reset">Reset</button>

   </div>

  );
}

export default App;
