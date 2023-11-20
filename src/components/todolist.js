import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './todolist.css';

const ToDoList = () => {
  const [inputText, setInputText] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleDateChange = (selectedDate) => {
    setDueDate(selectedDate);
  };

  const handleAddTask = () => {
    if (inputText.trim() === '' || !dueDate) {
      alert('Please enter a task and select a due date.');
      return;
    }

    const newTask = {
      text: inputText,
      dueDate: dueDate,
    };

    setTasks([...tasks, newTask]);
    setInputText('');
  };

  const handleSortByDueDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.dueDate - b.dueDate);
    setTasks(sortedTasks);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h2>Tasks</h2>
        <button onClick={handleSortByDueDate}>Sort by Due Date</button>
        <ul>
          {tasks.map((task, index) => (
            <li className="todos" key={index}>
              <strong>{task.text}</strong> - Due on {task.dueDate.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <DayPicker selected={dueDate} onDayClick={handleDateChange} />
      </div>
    </div>
  );
};

export default ToDoList;
