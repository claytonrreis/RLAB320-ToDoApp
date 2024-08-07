import React, { useState } from "react";

function AddNewTask({ addTask }) {
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleAddTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  }
  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-task" onClick={handleAddTask}>
        ➕ New Task
      </button>
    </div>
  );
}

export default AddNewTask;
