import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const AddToList = ({ addTask }) => {
  const [inputText, setInputText] = useState("");
  const onChange = (e) => {
    setInputText(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputText);
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputText}
        name="name"
        type="text"
        onChange={onChange}
        placeholder="enter a name"
        required
      />
      <button
        type="button"
        style={{ color: "lightBlue", fontSize: "24px", cursor: "pointer" }}
      >
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default AddToList;
