import { useEffect, useState } from "react";
import Routing from "../Routing";
// import ReactStudy from "../ReactStudy";

export default function MasterBody() {
  // useEffect()

  return (
    <div className="col-12 col-lg-3 offset-lg-5 text-white">
      {/* <ReactStudy /> */}
      <Routing />
    </div>
  );
}
