export const Task = (props) => {
  return (
    <div className="row">
      <div
        className="col-12"
        key={props.index}
        style={{
          backgroundColor: props.completed ? "green" : "",
        }}
      >
        {props.name} - {props.id}
      </div>
      <div className="col-12 m-1">
        <button
          className="btn btn-danger form-control"
          onClick={() => props.handleDeleteTaskByName(props.id)}
        >
          Remove from ToDoList
        </button>
        <button
          className="btn btn-success form-control mt-1"
          onClick={() => props.handleCompletedTask(props.id)}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
