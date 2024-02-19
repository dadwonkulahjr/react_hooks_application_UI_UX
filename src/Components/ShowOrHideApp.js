import { useState } from "react";

export default function ShowOrHideApp(props) {
  return (
    <div className="row py-5">
      <div className="col-12 col-md-12 col-lg-10 text-center m-1">
        <button
          className="btn btn-secondary form-control"
          onClick={props.handleShowOrHideClick}
        >
          {props.booleanValue ? "Hide" : "Show"} task!
        </button>
      </div>
    </div>
  );
}
