import { useState } from "react";

export default function AddToDo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="row mt-2">
        <div className="col-12 col-md-4 col-lg-4">
          <label>Title</label>
        </div>
        <div className="col-12 col-md-8 col-lg-8">
          <input
            type="text"
            placeholder="Tittle..."
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 mt-5 offset-lg-1">
            <button
              className="btn btn-success form-control"
              onClick={() => {
                setTitle(" ");
                onAddTodo(title);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
