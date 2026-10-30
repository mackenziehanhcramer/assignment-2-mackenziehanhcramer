// Task statistics in the header, in the format "total / completed"
import React from 'react';

function TaskCounter({ tasks }) {
  const totalTasks = tasks;
  const completedTasks = tasks ? tasks.filter((task) => task.completed).length : 0;

  return (
    <div className="task-counter">
      <div className="stat-item">
        <span>Total: <strong>{totalTasks}</strong></span>
      </div>
      <div className="stat-item">
        <span>Completed: <strong>{completedTasks}</strong></span>
      </div>
    </div>
  );
}

export default TaskCounter;