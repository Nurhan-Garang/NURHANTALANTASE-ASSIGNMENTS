import React, { useState } from "react";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import ToDoItem from  "./ToDoItem"
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <AddToDo onAdd={addTask} />
      <ToDoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

