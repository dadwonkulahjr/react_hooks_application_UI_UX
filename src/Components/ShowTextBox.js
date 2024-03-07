import { useEffect, useState } from "react";
import ShowTextBoxList from "./ShowTextBoxList";

export default function ShowTextBox() {
  const [userTask, setUserTask] = useState("");
  const [listOfTask, setListOfTask] = useState([]);

  const handleOnClick = () => {
    const userTaskObj = {
      id:
        listOfTask.length === 0 ? 1 : listOfTask[listOfTask.length - 1].id + 1,
      name: userTask,
      completed: false,
    };
    setListOfTask([...listOfTask, userTaskObj]);
  };

  const handleOnClickDelete = (task) => {
    if (
      window.confirm(
        "Are your sure you want to delete this record? " + task.name
      )
    ) {
      setListOfTask(listOfTask.filter((t) => t.id !== task.id));
      alert("Record deleted successfully!");
    } else {
      alert("Record is not deleted!");
    }
  };

  const handleOnClickCompleted = (id) => {
    setListOfTask(
      listOfTask.map((task) => {
        if (task.id === id) return { ...task, completed: true };
        else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div className="row">
        <div className="col col-12 col-md-12 col-lg-12">
          <button
            className="btn btn-success form-control"
            onClick={handleOnClick}
          >
            <i className="bi bi-plus-square"></i>&nbsp;Add Task
          </button>
        </div>
        <div className="col col-12 col-md-12 col-lg-12">
          <input
            type="text"
            className="form-control mt-1 bg-dark text-white"
            onChange={(e) => {
              setUserTask(e.target.value);
            }}
          />
          {/* <span>{userTask}</span> */}
        </div>
        <div className="col col-12 col-md-12 col-lg-12">
          <ul className="list-group">
            {listOfTask.map((task, key) => {
              return (
                <ShowTextBoxList
                  key={key}
                  task={task}
                  handleOnClickDelete={handleOnClickDelete}
                  id={task.id}
                  handleOnClickCompleted={handleOnClickCompleted}
                  completed={task.completed}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
