import React from "react";

function Task({text, category, deleteTask, id}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}

export default Task;