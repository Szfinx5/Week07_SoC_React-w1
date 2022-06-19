import React from "react";

function AppButton({ buttonText, callMyFunction, rowid }) {
  //props
  return (
    <button onClick={callMyFunction} id={rowid}>
      {buttonText}{" "}
    </button>
  ); //props.callmyfunction
}

export default AppButton;
