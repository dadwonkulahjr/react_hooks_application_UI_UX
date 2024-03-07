import { useState } from "react";

export default function TaskList({ todos, onChange, onDelete }) {
  //   const [test, setTest] = useState(false);
  return (
    <>
      <ul className="list-group mt-3">
        {todos.map((todo) => {
          return (
            <li className="list-group-item" key={todo.id}>
              <Task todos={todo} onChange={onChange} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Task({ todos, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <input
              type="text"
              className="form-control"
              value={todos.title}
              onChange={(e) => {
                onChange({
                  ...todos,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-12 offset-lg-1 mt-1">
            <button
              className="btn btn-success form-control"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  } else {
    todoContent = (
      <>
        <div className="row">
          <div className="text-success h6 col-12 col-md-12 col-lg-12">
            {todos.title}
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <button className="btn btn-info" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-4">
          <label>{todoContent}</label>
        </div>
        <div className="col-12 col-md-8 col-lg-8 mt-1">
          <input
            type="checkbox"
            checked={todos.checked}
            onChange={(e) => {
              onChange({
                ...todos,
                done: e.target.value,
              });
            }}
          />
        </div>
        <div className="row mt-1">
          <div className="col-md-12 col-12 col-lg-12">
            <button
              className="btn btn-danger form-control"
              onClick={() => {
                onDelete(todos.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
