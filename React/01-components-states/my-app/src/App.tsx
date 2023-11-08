import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0)
  console.log("this is app")
  let x = 3;

  function onClickButton() {
    console.log(`user clicked ${x} times`)
    x++
    console.log(x)
    setCounter(counter +1)
  }

  const date = new Date();

  return (
    <div className="App">
      <h1>Example</h1>
      <p>this is paragraph</p>
      <p>x:{x}</p>
      <p>counter: {counter}</p>
      <button onClick={onClickButton}>Test</button>
      <h2>It is now: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
