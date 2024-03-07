import { useEffect, useState } from "react";
import IndexTodoList from "./IndexTodoList";

export default function Routing() {
  return (
    <>
      <div className="row border">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="text-center text-dark h2 p-1">
            <IndexTodoList />
          </div>
        </div>
      </div>
    </>
  );
}
