import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [taskText, setTaskText] = useState("");
const [taskCategory, setTaskCategory] = useState(categories[0]); 

const handleFormSubmit = (e) => {
  e.preventDefault();

  const newTask = {
    id: new Date().getTime(), 
    text: taskText,
    category: taskCategory,
  };

  onTaskFormSubmit(newTask);

  setTaskText("");
  setTaskCategory(categories[0]);
};

return (
  <form onSubmit={handleFormSubmit} className="new-task-form">
    <label>
      Task:
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
    </label>
    <label>
      Category:
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.map((category) => (
          category !== "All" && (
            <option key={category} value={category}>
              {category}
            </option>
          )
        ))}
      </select>
    </label>
    <button type="submit">Add Task</button>
  </form>
);
}

export default NewTaskForm;

