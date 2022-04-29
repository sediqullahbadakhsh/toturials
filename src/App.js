import React, { useState } from "react";
import Overview from "./components/Overview";
import "./App.css";
import AddToList from "./components/AddToList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems([...items.filter((item) => item.id !== id)]);
  };

  const setUpdate = (updateName, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.name = updateName;
        }
        return item;
      })
    );
  };

  const handleToggle = (id) => {
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    
  };

  const addTask = (name) => {
    const newItem = {
      id: uuidv4(),
      name,
      completed: false,
    };
    setItems([...items, newItem]);
  };
  return (
    <div className="main-container">
      <AddToList items={items} addTask={addTask} />
      <Overview
        items={items}
        onClick={deleteItem}
        setUpdate={setUpdate}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default App;
