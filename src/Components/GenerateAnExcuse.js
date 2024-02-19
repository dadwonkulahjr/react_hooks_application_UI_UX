import axios from "axios";
import { useEffect, useState } from "react";

export default function GenerateAnExcuse() {
  // First Generate excuse for party
  //Party
  const [generateExcuseForParty, setGenerateExcuseForParty] = useState(null);
  const [isVisableParty, setIsVisableParty] = useState(false);

  //Family
  const [isVisableFamily, setIsVisableFamily] = useState(false);
  const [generateExcuseForFamily, setGenerateExcuseForFamily] = useState(null);

  //Office
  const [isVisableOffice, setIsVisableOffice] = useState(false);
  const [generateExcuseForOffice, setGenerateExcuseForOffice] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get("https://excuser-three.vercel.app/v1/excuse/party/")
  //       .then((res) => {
  //         console.log(res.data[0].category);
  //       });
  //   }, []);
  function HandleGenerateAnExcuseForParty() {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/party/")
      .then((res) => {
        setGenerateExcuseForParty(res.data[0]);
        // console.log(res.data[0]);
      });
    setIsVisableParty(!isVisableParty);
  }

  function HandleGenerateAnExcuseForFamily() {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/family/")
      .then((res) => {
        setGenerateExcuseForFamily(res.data[0]);
      });
    setIsVisableFamily(!isVisableFamily);
  }

  function HandleGenerateAnExcuseForOffice() {
    axios
      .get("https://excuser-three.vercel.app/v1/excuse/office/")
      .then((res) => {
        setGenerateExcuseForOffice(res.data[0]);
      });
    setIsVisableOffice(!isVisableOffice);
  }

  //   useEffect(() => {
  //     axios
  //       .get("https://excuser-three.vercel.app/v1/excuse/family/")
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   });

  return (
    <>
      <div className="border">
        <div className="border mt-5 border-info">
          <div className="text-center h2 text-info">
            Generate An Excuse Application
            <hr />
          </div>
          <div className="row text-center mb-4 p-4 m-1">
            <div className="row">
              <div className="col-12 col-md-12 col-lg- mt-1">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12 mt-1">
                    <button
                      className="btn btn-outline-primary form-control"
                      onClick={HandleGenerateAnExcuseForParty}
                    >
                      Excuse For Party
                    </button>
                  </div>
                  <div className="col-12 col-lg-12 col-md-12 mt-1">
                    <button
                      className="btn btn-outline-info form-control"
                      onClick={HandleGenerateAnExcuseForFamily}
                    >
                      Excuse For Family
                    </button>
                  </div>
                  <div className="col-12 col-lg-12 col-md-12 mt-1">
                    <button
                      className="btn btn-outline-success form-control"
                      onClick={HandleGenerateAnExcuseForOffice}
                    >
                      Excuse For Office
                    </button>
                  </div>
                  {isVisableParty && (
                    <div className="row">
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-white h6">
                          Excuse: {generateExcuseForParty?.excuse}
                        </div>
                      </div>
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-white h6">
                          Category: {generateExcuseForParty?.category}
                        </div>
                      </div>
                    </div>
                  )}

                  {isVisableFamily && (
                    <div className="row">
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-info h6">
                          Excuse: {generateExcuseForFamily?.excuse}
                        </div>
                      </div>
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-info h6">
                          Category: {generateExcuseForFamily?.category}
                        </div>
                      </div>
                    </div>
                  )}

                  {isVisableOffice && (
                    <div className="row">
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-success h6">
                          Excuse: {generateExcuseForOffice?.excuse}
                        </div>
                      </div>
                      <div className="col-12 col-lg-12 col-md-12">
                        <div className="text-success h6">
                          Category: {generateExcuseForOffice?.category}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
