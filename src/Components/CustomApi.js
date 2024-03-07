import axios from "axios";
import { useEffect, useState } from "react";
import CustomApiHelper from "./CustomApiHelper";

export default function CustomApi() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameCount, setNameCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/developers/")
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col col-12 col-md-12 col-lg-12">
          <span className="text-info h2 text-center">Age Predictor</span>
        </div>
        <div className="row mt-3 border p-2">
          <div className="col col-5 col-md-4 col-lg-6 h5">
            <label>Enter your name:</label>
          </div>
          <div className="col col-7 col-md-8 col-lg-6 h5">
            <input
              className="form-control"
              type="text"
              placeholder="Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col col-8 col-lg-6 col-md-6 offset-lg-7 offset-5">
              <button className="btn btn-info form-control">Predict Age</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
