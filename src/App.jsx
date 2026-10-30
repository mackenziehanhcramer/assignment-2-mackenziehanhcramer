import React, { useState } from 'react';
import './App.css'
import TaskCounter from './components/TaskCounter.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

import inbox_icon from './assets/inbox_icon.png';
import calendar_icon from './assets/calendar_icon.png';
import upcoming_icon from './assets/upcoming_icon.png';
import check_icon from './assets/check_icon.png';
import search_icon from './assets/search_icon.png';
import menu_icon from "./assets/menu_icon.png";


// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, text: "Call Mom", completed: false },
    { id: 2, text: "Buy the new issue of Scientific American", completed: false },
    { id: 3, text: "Return the textbook to Josie", completed: false },
    { id: 4, text: "Buy the new album by Rake", completed: false },
    { id: 5, text: "Buy a gift card for Dad", completed: false }
  ]);

  const [filter, setFilter] = useState("All");

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
    <section className='main-header'>
      <img src={menu_icon} alt="Menu" />
            
            <span className="search">
                <form>
                    <img src={search_icon} alt="Search" />
                    <input type="text" placeholder="Quick Find" />
                </form>
            </span>
            
            <span>
                <p>
                    <img src={check_icon} alt="Check" />
                    <TaskCounter tasks={tasks} />
                </p>
            </span>
    </section>

    <section className="container">
        <nav className="sidebar">
          <ul className="side">
            <li>
              <img src={inbox_icon} />
              <span>Inbox</span> <span className="count">{totalTasks}</span>
            </li>

            <li>
              <img src={calendar_icon} />
              <span>Today</span> <span className="count">{totalTasks}</span>
            </li>

            <li>
              <img src={upcoming_icon} />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>

        <main className="main-content">

          <div className="filter-buttons" style={{ marginBottom: '15px' }}>
              <button 
                className={filter === "All" ? "active-filter" : ""} 
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <span> | </span>
              <button 
                className={filter === "Active" ? "active-filter" : ""} 
                onClick={() => setFilter("Active")}
              >
                Active
              </button>
              <span> | </span>
              <button 
                className={filter === "Completed" ? "active-filter" : ""} 
                onClick={() => setFilter("Completed")}
              >
                Completed
              </button>
            </div>

            <TaskForm onAdd={addTask} />

            <TaskList 
              tasks={filteredTasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
        </main>
      </section>
      </>
  )
}

export default App
