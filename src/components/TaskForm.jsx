// Form for adding a new task
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page on submit
    
    // Don't add empty tasks or tasks with only spaces
    if (!inputText.trim()) return;

    // Call the parent function passed down as a prop
    onAddTask(inputText);

    // Reset the input field back to blank
    setInputText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;