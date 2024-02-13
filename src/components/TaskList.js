// TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', category: 'Category A' },
    { id: 2, text: 'Task 2', category: 'Category B' },
    // Add more tasks as needed
  ]);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;

