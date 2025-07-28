import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onDelete }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
