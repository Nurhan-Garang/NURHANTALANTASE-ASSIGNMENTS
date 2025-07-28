import React from "react";

function ToDoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;