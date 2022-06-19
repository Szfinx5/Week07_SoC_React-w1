import React from "react";

function Input({ handleChange, placeholderText, text }) {
  return (
    <input
      type="text"
      placeholder={placeholderText}
      onChange={handleChange}
      value={text}
    />
  );
}

export default Input;
