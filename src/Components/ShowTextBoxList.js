export default function ShowTextBoxList(props) {
  return (
    <>
      <div className="row">
        <li
          className="list-group-item col-8 h1"
          key={props.key}
          style={{ backgroundColor: props.completed ? "#4caf50" : "" }}
        >
          {props.task.name}
        </li>
        <li className="col-4 list-group-item" key={props.key}>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => props.handleOnClickDelete(props.task)}
          >
            <i className="bi bi-trash-fill"></i>&nbsp;Delete
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => props.handleOnClickCompleted(props.task.id)}
          >
            <i className="bi bi-check2-square"></i>&nbsp;Completed
          </button>
        </li>
      </div>
    </>
  );
}
