// Task statistics in the header, in the format "total / completed"
import React from 'react';

function TaskCounter({ tasks = [] }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <span className="task-counter">
      {total} / {completed}
    </span>
  );
}

export default TaskCounter;