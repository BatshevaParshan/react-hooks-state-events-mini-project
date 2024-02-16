import React from "react";
import Task from "./Task.js"

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (<Task
          key={index}
          text={task.text}
          category={task.category}
          deleteTask={() => deleteTask(index)}>
           </Task>)
      })}
    </div>
  );
}

export default TaskList;