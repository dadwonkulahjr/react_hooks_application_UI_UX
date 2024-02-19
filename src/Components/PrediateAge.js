import { useState } from "react";
import axios from "axios";

export default function PrediateAge() {
  const [username, setUserName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  function handleChangeNameEvent(event) {
    setUserName(event.target.value);
  }
  function handlePredictedAge() {
    axios.get(`https://api.agify.io/?name=${username}`).then((res) => {
      setPredictedAge(res.data);
    });
  }

  return (
    <>
      <div className="border mt-5 border-success">
        <div className="text-center h2 text-success">
          Predicted Age Application
          <hr />
        </div>
        <div className="row text-center mb-4 p-4 m-1">
          <div className="row">
            <div className="col-12 col-md-12 col-lg- mt-1">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 mt-1">
                  <input
                    type="text"
                    placeholder="Name..."
                    className="form-control"
                    onChange={handleChangeNameEvent}
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-12 mt-1">
                  <button
                    className="btn btn-outline-success form-control"
                    onClick={handlePredictedAge}
                  >
                    Predicte Your Age
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-12 col-lg-12 h2">
                  <div className="h2 text-success col-12 col-md-12 col-lg-12">
                    Name: {predictedAge?.name}
                  </div>
                  <div className="h2 text-success col-12 col-md-12 col-lg-12">
                    Predicted Age: {predictedAge?.age}
                  </div>
                  <div className="h2 text-success col-12 col-md-12 col-lg-12">
                    Count: {predictedAge?.count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
