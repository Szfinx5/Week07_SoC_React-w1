import React from "react";

function Item(props) {
  return (
    <li key={props.id} style={{ fontFamily: `${props.font}` }}>
      {props.text}{" "}
    </li>
  );
}

export default Item;
