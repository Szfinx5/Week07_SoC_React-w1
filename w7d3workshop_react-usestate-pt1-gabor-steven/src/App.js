import React from "react";
import "./App.css";
import { useState } from "react";
import { bootcampers, compliments } from "./bootcampers.js";

function App() {
  const [bootcamperIndex, setBoootcamperIndex] = useState(0);
  const [complimentIndex, setComplimentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleRandomClick() {
    let randomNumber = Math.floor(Math.random() * bootcampers.length);
    setBoootcamperIndex(randomNumber);
    let secondNumber = Math.floor(Math.random() * compliments.length);
    setComplimentIndex(secondNumber);
  }

  function toggleActiveButton() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    console.log(isActive);
  }

  return (
    <div className="App">
      <h1>React useState</h1>
      <p>
        {bootcampers[bootcamperIndex]} {compliments[complimentIndex]}
      </p>
      <button onClick={handleRandomClick} disabled={isActive}>
        Click me for a random bootcamper!
      </button>
      <button onClick={toggleActiveButton}>
        Click me to toggle random button
      </button>
    </div>
  );
}

export default App;
