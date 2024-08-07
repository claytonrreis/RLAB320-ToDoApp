import React, { useState, useEffect } from "react";
import AddNewTask from "./AddNewTask";
import Header from "./Header";
import ListOfTasks from "./ListOfTasks";

function NewHomeToDo() {
  const getStoredTitle = () => {
    const storedTitle = localStorage.getItem("headerTitle");
    return storedTitle ? storedTitle : "📝To-do App 📝";
  };

  const [headerTitle, setHeaderTitle] = useState(getStoredTitle());
  const [newTitle, setNewTitle] = useState("");

  const getStoredTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState(getStoredTasks());
  console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("headerTitle", headerTitle);
  }, [headerTitle]);

  function addTask(newTaskText) {
    if (newTaskText.trim() !== "") {
      const newTask = { text: newTaskText, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }

  function checkedTask(index) {
    console.log(index);

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      console.log(updatedTasks[index].completed);

      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];
        return updatedTasks;
      });
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        return updatedTasks;
      });
    }
  }

  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleTitleSubmit(e) {
    e.preventDefault();
    if (newTitle.trim() !== "") {
      setHeaderTitle(newTitle);
      setNewTitle("");
    }
  }

  return (
    <div>
      <Header title={headerTitle} />
      <div className="title-editor">
        {" "}
        <form onSubmit={handleTitleSubmit} className="title-form">
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Enter new title"
            className="title-input"
          />
          <button type="submit" className="title-submit-btn">
            ✏️Change Title
          </button>
        </form>
      </div>
      <div className="container">
        <AddNewTask addTask={addTask} />
        <ListOfTasks
          tasks={tasks}
          checkedTask={checkedTask}
          deleteTask={deleteTask}
          moveTaskDown={moveTaskDown}
          moveTaskUp={moveTaskUp}
        />
      </div>
    </div>
  );
}
export default NewHomeToDo;
