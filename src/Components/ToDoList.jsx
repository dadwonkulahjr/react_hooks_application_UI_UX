import { useState } from "react";
import { Task } from "./Task";

function ToDoList() {
  const [toDoList, setToDoList] = useState(() => {
    return [];
  });

  const [newTask, setNewTask] = useState(() => {
    return "";
  });

  const handleAddToDoList = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddNewTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const handleDeleteTaskByName = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (id) => {
    // alert(id);
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <div className="row border py-6" style={{ marginTop: "40%" }}>
        <div className="col-12 col-6 col-lg-12 col-md-12 py-4">
          <div className="text-end mb-3 h2 text-success">Create a task!</div>
          <input
            type="text"
            className="form-control"
            placeholder="Type a task...."
            onChange={handleAddToDoList}
          />
          {newTask}
          <button
            className="btn btn-success mt-3 form-control"
            onClick={handleAddNewTask}
          >
            <i className="bi bi-plus-square-fill"></i> Add Task
          </button>
        </div>
        <div className="col-12 col-6 py-4">
          {toDoList.map((task, index) => {
            return (
              <Task
                id={task.id}
                key={index}
                name={task.name}
                handleDeleteTaskByName={handleDeleteTaskByName}
                handleCompletedTask={handleCompletedTask}
                completed={task.completed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
