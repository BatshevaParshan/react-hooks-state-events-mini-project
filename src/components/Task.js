import React from "react";

function Task({ task, onDelete }) {
const handleDeleteClick = () => {
  onDelete(task.id); 
};

return (
  <div className="task">
    <div className="label">Category: {task.category}</div>
    <div className="text">Text: {task.text}</div>
    <button className="delete" onClick={handleDeleteClick}>
      X
    </button>
  </div>
);
}

export default Task;
