import { useState } from 'react'

import './App.css'
import './components/TaskCounter.jsx'
import './components/TaskForm.jsx'
import './components/TaskItem.jsx'
import './components/TaskList.jsx'
import inbox_icon from './assets/inbox_icon.png';
import calendar_icon from './assets/calendar_icon.png';
import upcoming_icon from './assets/upcoming_icon.png';

import check_icon from './assets/check_icon.png';
import search_icon from './assets/search_icon.png';
import menu_icon from "./assets/menu_icon.png";

import React from 'react'


// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  return (
    <><div className="app">
      <h1>Task Manager</h1>
      <p>Replace this with your components.</p>
      
    </div><section class="container">
        <nav class="sidebar">
          <ul class="side">
            <li>
              <img src={inbox_icon} />
              <span>Inbox</span> <span class="count">5</span>
            </li>

            <li>
              <img src={calendar_icon} />
              <span>Today</span> <span class="count">5</span>
            </li>

            <li>
              <img src={upcoming_icon} />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>

        <main class="main-content">
          <span>
            <h1>Inbox</h1>
            <ul>
              <li>
                <input type="radio" />
                Call Mom</li>
              <li>
                <input type="radio" />
                Buy the new issue of Scientific American</li>
              <li><input type="radio" />
                Return the textbook to Josie</li>
              <li><input type="radio" />
                Buy the new album by Rake</li>
              <li><input type="radio" />
                Buy a gift card for Dad</li>
            </ul>
          </span>
        </main>
      </section></>
  )
}

export default App
