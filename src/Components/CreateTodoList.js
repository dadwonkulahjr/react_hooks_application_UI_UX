export default function CreateTodoList(props) {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-12 mt-2">
        <button
          className="btn btn-success form-control"
          onClick={() => props.handleAddItemClick()}
        >
          <i className="bi bi-plus-circle-fill"></i>&nbsp;Add Item
        </button>
      </div>
    </>
  );
}
