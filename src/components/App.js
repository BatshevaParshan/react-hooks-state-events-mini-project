import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS);
const [selectedCategory, setSelectedCategory] = useState("All");

const deleteTask = (taskId) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
};

const filterTasksByCategory = (category) => {
  setSelectedCategory(category);
  if (category === "All") {
    setTasks(TASKS);
  } else {
    const filteredTasks = TASKS.filter((task) => task.category === category);
    setTasks(filteredTasks);
  }
};

const handleTaskFormSubmit = (newTask) => {
  setTasks((prevTasks) => [...prevTasks, newTask]);
};

return (
  <div className="App">
    <h2>My tasks</h2>
    <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onFilterChange={filterTasksByCategory} />
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    <TaskList tasks={tasks} onDelete={deleteTask} />
  </div>
);
}

export default App;
