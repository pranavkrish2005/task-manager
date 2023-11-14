
import React, { useState } from 'react';
import './todolist.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    // checks if the string is empty
    if (newTask.trim() !== '') {
      // adds newtask to the existing tasks array
      setTasks([...tasks, newTask]);
      // resets the newTask to empty string
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div id="todolist">
      <h2>To-Do List</h2>
      <input
          type="text"
          value={newTask}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <div>
      </div>
    </div>
  );
};

export default TodoList;
