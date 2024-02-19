import { useState } from "react";
import ShowOrHideApp from "./ShowOrHideApp";

export default function MyApp(props) {
  const [counterIndex, setCounterIndex] = useState(0);
  const [showOrHideApp, setShowOrHideApp] = useState(false);

  const handleIncrementClick = () => {
    setCounterIndex(counterIndex + 1);
  };

  const handleDecrementClick = () => {
    setCounterIndex(counterIndex - 1);
  };

  const handleResetClick = () => {
    setCounterIndex(0);
  };
  const handleShowOrHideClick = () => {
    setShowOrHideApp(!showOrHideApp);
  };
  return (
    <div>
      <ShowOrHideApp
        handleShowOrHideClick={() => handleShowOrHideClick()}
        booleanValue={showOrHideApp}
      />
      {showOrHideApp && (
        <div className="border p-3" style={{ marginTop: "20%" }}>
          <h1
            className="h2 text-center text-success"
            style={{ backgroundColor: "whitesmoke" }}
          >
            My App
          </h1>
          <hr />
          <div className="text-center h5">Counter</div>
          <div className="text-center h3">{counterIndex}</div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 m-1">
              <button
                className="btn btn-success form-control"
                onClick={handleIncrementClick}
              >
                <i className="bi bi-patch-plus-fill"></i>&nbsp;Increment
              </button>
            </div>
            <div className="col-12 col-md-12 col-lg-12 m-1">
              <button
                className="btn btn-danger form-control"
                onClick={handleDecrementClick}
              >
                <i className="bi bi-dash-square-fill "></i>&nbsp;Decrement
              </button>
            </div>
            <div className="col-12 col-md-12 col-lg-12 m-1">
              <button
                className="btn btn-warning form-control"
                onClick={handleResetClick}
              >
                <i className="bi bi-x-square-fill"></i>&nbsp;Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
