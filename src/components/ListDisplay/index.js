/* This component will show the list of items that the person has entered.*/

import React from "react";
import ListItem from "../ListItem";

function ListDisplay({ list, tickItem }) {
  return (
    <ol>
      {list.map((listItem) => (
        <ListItem
          name={listItem.name}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
        />
      ))}
    </ol>
  );
}

export default ListDisplay;
