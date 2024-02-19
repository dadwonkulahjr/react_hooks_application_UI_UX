import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/styles.css";
import MasterHeader from "./Components/Layout/MasterHeader";
import MasterFooter from "./Components/Layout/MasterFooter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <MasterHeader />
    <MasterFooter />
  </>

  // </React.StrictMode>
);
