import "./App.css";
import AppButton from "../Input/Button/Index.js";
import Input from "../Input/Input_Field/index.js";
import DisplayList from "../List";
import ListItem from "../List_item";
import { dummyDataList } from "../dummydata/dummydata.js";
import React, { useState, useRef } from "react";

/* button functions
- handleSave function to add new to do list item to the list
    - add item immutably to the array of to dos, from the state 'text'
    - re-render the to do list with udpated items
- handleDelete function to remove list item from the list
    - remove item to the array of to dos
    - update state
    - re-render the to do list with udpated items
*/

// Notes - Components need to have first letter capitalised or else ERROR
function App() {
  // manages text input state
  const [text, setText] = useState("");
  //manages the state of data from the dummydatalist
  const [arrayDataState, setArrayDataState] = useState(dummyDataList);

  function handleChange(event) {
    setText(event.target.value);
    console.log(text);
  }

  function addItem() {
    // updating array immutably using state
    const newID = arrayDataState.length + 1;
    const newItemObject = { id: newID, listItem: text };

    // add item to the state and triggering auto rendering of new items
    setArrayDataState([...arrayDataState, newItemObject]);
  }

  function removeItem(event) {
    //console.log(arrayDataState);
    //console.log(event.target.id);

    //  ...arrayDataState.slice(0, event.target.id - 1),
    //  ...arrayDataState.slice(event.target.id),

    let afterDelete = [
      ...arrayDataState.filter(function (item) {
        return Number(event.target.id) !== item.id;
      }),
    ];
    setArrayDataState(afterDelete);
    console.log(afterDelete);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div id="addItem">
        <Input handleChange={handleChange} placeholderText={"Add a new item"} />
        <AppButton buttonText="Add item to the list" callMyFunction={addItem} />
      </div>
      <div className="Display-list">
        <DisplayList
          arrayData={arrayDataState.map(function (item) {
            return (
              <ListItem
                key={item.id}
                rowid={item.id}
                listItemToDo={item.listItem}
                deleteButton={
                  <AppButton
                    buttonText="Delete"
                    callMyFunction={removeItem}
                    rowid={item.id}
                  />
                }
              />
            );
          })}
        />
      </div>
    </div>
  );
}

export default App;
