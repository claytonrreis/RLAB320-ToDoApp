import React from "react";
import Tasks from "./Tasks";

function ListOfTasks({
  tasks,
  deleteTask,
  moveTaskDown,
  moveTaskUp,
  checkedTask,
}) {
  return (
    <div>
      <ol className="task-list">
        {tasks.map((task, index) => {
          return (
            <Tasks
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              moveTaskDown={moveTaskDown}
              moveTaskUp={moveTaskUp}
              checkedTask={checkedTask}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default ListOfTasks;
