import React from "react";

function ListItem({ rowid, listItemToDo, deleteButton }) {
  return (
    <li>
      {listItemToDo} {deleteButton}
    </li>
  );
}

export default ListItem;
