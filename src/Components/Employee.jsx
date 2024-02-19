import React from "react";

const Employee = (props) => {
  return (
    <div className="card m-2">
      <div className="card-header h2">
        {props.name} - {props.company}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.position}</h5>
        <p className="card-text">
          {props.introText}
          <br />I earn ${props.salary.toFixed(1)} monthly!
        </p>
        <a href="#" className="btn btn-primary">
          <i className="bi bi-info-circle-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Employee;
