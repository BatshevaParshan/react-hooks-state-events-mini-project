import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [newTaskText, setNewTaskText] = useState("");
const [selectedCategory, setSelectedCategory] = useState(categories[0]); 
const handleTextChange = (event) => {
  setNewTaskText(event.target.value);
};

const handleCategoryChange = (event) => {
  setSelectedCategory(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (newTaskText.trim() === "") {
    alert("Please enter a task text");
    return;
  }

  const newTask = {
    text: newTaskText,
    category: selectedCategory,
    id: Date.now(),
  };

  onTaskFormSubmit(newTask);

  setNewTaskText("");
  setSelectedCategory(categories[0]);
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Task:
      <input type="text" value={newTaskText} onChange={handleTextChange} />
    </label>
    <label>
      Category:
      <select value={selectedCategory} onChange={handleCategoryChange}>
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
