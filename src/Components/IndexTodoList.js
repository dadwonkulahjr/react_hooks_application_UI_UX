import { useState } from "react";
import CreateTodoList from "./CreateTodoList";

export default function IndexTodoList() {
  const [listItems, setListItems] = useState(() => {
    return [];
  });
  const [item, setItem] = useState("");

  const handleAddItemClick = () => {
    const itemObj = {
      id: listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1,
      name: item,
    };
    setListItems([...listItems, itemObj]);
    alert("Item name: " + itemObj.name + "\n" + "Id: " + itemObj.id);
  };
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 ">
          <div className="h2 text-success">
            <i className="bi bi-google-play"></i>&nbsp;Todo List App
            <hr />
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <input
              type="text"
              className="form-control"
              placeholder="Add item to Todo List"
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
          </div>
          <CreateTodoList handleAddItemClick={handleAddItemClick} />
          <div className="col-12 col-md-12 col-lg-12 mt-3">
            <ul className="list-group">
              {listItems.map((item, key) => {
                return (
                  <>
                    <li className="list-group-item" key={key}>
                      {item.name}
                    </li>
                    <li className="list-group-item" key={key}>
                      <button className="btn btn-info form-control btn-sm ">
                        <i className="bi bi-pencil-square"></i>&nbsp;Edit
                      </button>
                      <button className="btn btn-danger form-control btn-sm ">
                        <i className="bi bi-trash-fill"></i>&nbsp;Delete
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
