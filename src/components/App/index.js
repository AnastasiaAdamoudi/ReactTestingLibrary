import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddItem from "../AddItem";
import ListDisplay from "../ListDisplay";
import ClearList from "../ClearList";

/* 1. App will contain components which will allow a person to input items into a list, show the items that are in the list, 
and clear all of the items in a list. 
2. In order for the components to interact with one another, some functionality will need to be hoisted into the App component
 */

let shoppingList = [
  { name: "Oranges", completed: false, id: uuidv4() },
  { name: "Tea", completed: false, id: uuidv4() },
  { name: "Aubergine", completed: false, id: uuidv4() },
  { name: "Biscuits", completed: false, id: uuidv4() },
  { name: "Dishwasher Tablets", completed: false, id: uuidv4() },
];

function App() {
  const [list, setList] = useState(shoppingList);

  function addToList(newListItem) {
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listObject = { name: newListItem, completed: false, id: uuidv4() };
    const updatedList = [...list, listObject];
    setList(updatedList);
  }

  function clearList() {
    //This function clears all the items that have been added to the list.
    const clearedList = [];
    setList(clearedList);
  }

  function tickItem(idOfItemTicked) {
    const index = list.findIndex((item) => item.id === idOfItemTicked);
    if (-1 === index) {
      return;
    }

    const oldItem = list[index];
    const updatedItem = {
      ...oldItem,
      completed: !oldItem.completed,
    };

    const updatedList = [...list.slice(0, index), updatedItem, ...list.slice(index + 1)];

    setList(updatedList);
  }

  return (
    <main>
      <AddItem addToList={addToList} buttonText={"Add To List"} />
      <ListDisplay list={list} tickItem={tickItem} />
      <ClearList clearList={clearList} buttonText={"Clear List"} />
    </main>
  );
}

export default App;
