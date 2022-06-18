import React from "react";

function Input({ handleChange, text }) {
  return (
    <input
      type="text"
      placeholder="Enter text"
      onChange={handleChange}
      value={text}
    />
  );
}

export default Input;
