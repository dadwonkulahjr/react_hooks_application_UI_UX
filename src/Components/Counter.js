import { useState } from "react";

function Counter() {
  const [counterVariable, setCounterVariable] = useState(() => {
    return 0;
  });
  return (
    <div className="text-white">
      <span className="offset-6 h1">{counterVariable}</span>
      <button
        className="btn btn-success form-control m-1"
        onClick={() => {
          setCounterVariable(counterVariable + 1);
        }}
      >
        <i className="bi bi-plus-circle-fill"></i> Increment
      </button>
      <button
        className="btn btn-danger form-control m-1"
        onClick={() => {
          setCounterVariable(counterVariable - 1);
        }}
      >
        <i className="bi bi-dash-circle-fill"></i> Decrement
      </button>
      <button
        className="btn btn-secondary form-control m-1"
        onClick={() => {
          setCounterVariable(0);
        }}
      >
        <i className="bi bi-0-circle-fill"></i> Back to Zero
      </button>
    </div>
  );
}

export default Counter;
