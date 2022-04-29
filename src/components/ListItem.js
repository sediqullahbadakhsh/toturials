import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ListItem = ({
  name,
  onClick,
  id,
  setUpdate,
  completed,
  handleToggle,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEditing = () => {
    setEdit(true);
  };

  const handleUpdatedone = (event) => {
    if (event.key === "Enter") {
      setEdit(false);
    }
  };
  const onClickUpdate = () => {
    setEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <li>
      <input
        checked={completed}
        onChange={() => handleToggle(id)}
        type="checkbox"
      />
      <div className={completed ? "strike grid-list" : "grid-list"}>
        {name}
        <div>
          <button
            style={{ color: "green", fontSize: "24px", cursor: "pointer" }}
            onClick={handleEditing}
          >
            <FaEdit />
          </button>
          <button
            style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
            onClick={() => onClick(id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className={edit ? "update-form" : "none"}>
        <form
          className={edit ? "update-input" : "none"}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="textInput"
            value={name}
            onChange={(e) => {
              setUpdate(e.target.value, id);
            }}
            onKeyDown={handleUpdatedone}
          />
          <button
            type="button"
            onClick={onClickUpdate}
            style={{ color: "Blue", fontSize: "24px", cursor: "pointer" }}
          >
            Update
          </button>
        </form>
      </div>
    </li>
  );
};

export default ListItem;
