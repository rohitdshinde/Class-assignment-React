import "./App.css";

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import Form from "./Form"
import DataFetcher from "./DataFetcher";

function App() {
  const [progress, setProgress] = useState(0);
  // conse [count, setCount] = useState(0)
  const updateProgress = () => {
    const newProgress = Math.min(progress + 10, 100);
    setProgress(newProgress);
    // setCount((c)=>c+1)
  };

  const decreaseProgress = () =>{
    const newProgress = Math.min(progress - 10, 100);
    setProgress(newProgress);
    // setCount((c)=>c-1)
  }
  return (
    <div className="App">
      {/* <HelloWorld />
      <Counter/>
      <Form/>
      <DataFetcher/> */}
      <div>

        <ProgressBar percentage={progress} height={20} color="red" />
        <button onClick={updateProgress}>Increase Progress</button> &nbsp;
        <button onClick={decreaseProgress}>Decrease Progress</button>
     
      </div>
    </div>
  );
}

export default App;
