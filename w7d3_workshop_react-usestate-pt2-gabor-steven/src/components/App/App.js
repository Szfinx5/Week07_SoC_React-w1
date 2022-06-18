import React, { useState } from "react";
import "./App.css";
import Item from "../Item";
import Input from "../Input";

function App() {
  const [text, setText] = useState("");

  let fontListData = [
    "Arial",
    "Courier New",
    "Helvetica",
    "Tahoma",
    "Brush Script MT",
  ];

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <div>
        <Input handleChange={handleChange} />
        {fontListData.map((font, i) => {
          return <Item key={i} text={text} font={font} />;
        })}
      </div>
    </div>
  );
}

export default App;
