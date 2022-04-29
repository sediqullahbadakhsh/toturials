import React from "react";
import ListItem from "./ListItem";

const Overview = ({ items, edit, onClick, setUpdate, handleToggle }) => {
  return (
    <ul className="list-container">
      {items.map((item) => (
        <ListItem
          key={item.id}
          edit={edit}
          name={item.name}
          onClick={onClick}
          id={item.id}
          setUpdate={setUpdate}
          completed={item.completed}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default Overview;
