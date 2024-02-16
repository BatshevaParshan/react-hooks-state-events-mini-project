import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleTaskFormSubmit = (newTask) => { 
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  const visibleTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);
   
  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")}
      onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;