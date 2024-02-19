import { useEffect, useState } from "react";
import axios from "axios";
import PrediateAge from "./PrediateAge";
import GenerateAnExcuse from "./GenerateAnExcuse";

export default function ReactStudy() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.fact);
  //   });
  const [catfact, setCatFact] = useState("");

  function handleGenerateCatFact() {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    handleGenerateCatFact();
  }, []);
  return (
    <>
      <GenerateAnExcuse />
      {/* <div className="border mt-5">
        <div className="text-center h2">
          User Information
          <hr />
        </div>
        <div className="row text-center mb-4 p-4 m-1">
          <div className="row">
            <div className="col-12 col-md-12 col-lg- mt-1">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <button
                    className="btn btn-primary form-control"
                    onClick={handleGenerateCatFact}
                  >
                    Generate Cat Fact
                  </button>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <p>{catfact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12 col-md-12 col-lg-12">Age: </div>
          <div className="col-12 col-md-12 col-lg-12">Name: </div>
          <div className="col-12 col-md-12 col-lg-12">Third</div>
        </div>
      </div> */}
    </>
  );
}
