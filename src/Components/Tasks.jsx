import React from "react";

function Tasks({
  task,
  index,
  deleteTask,
  moveTaskDown,
  moveTaskUp,
  checkedTask,
}) {
  return (
    <li className="task-item">
      <div className="inner-list">
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
        <div className="task-buttons">
          <button
            className={`complete-btn ${task.completed ? "completed" : ""}`}
            onClick={() => checkedTask(index)}
          >
            {task.completed ? "Undo" : "✅"}
          </button>
          <button className="move-up" onClick={() => moveTaskUp(index)}>
            ⬆️
          </button>
          <button className="move-down" onClick={() => moveTaskDown(index)}>
            ⬇️
          </button>
          <button className="del-btn" onClick={() => deleteTask(index)}>
            ❌
          </button>
        </div>
      </div>
    </li>
  );
}

export default Tasks;
