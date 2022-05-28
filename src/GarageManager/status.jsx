import Select from "react-select";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

const StatusForm = ({ displayStatusFrom }) => {
  const vehicleState = [
    { value: "rented", label: "Rented" },
    { value: "available", label: "Available" },
    { value: "under", label: "Under" },
  ];
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered  modal-lg"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Status Form
            </h4>
          </div>
          <div className="modal-body">
            <div className="vehicle-info d-flex flex-md-row flex-column m-2 p-3 border ">
              <div className="w-100">
                <div className="d-flex flex-md-row flex-column ">
                  <div className="w-100 m-1 d-flex flex-column fs-5">
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-5"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Registration Number
                      </label>
                      <p
                        className="form-control fs-5"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        123456 124 25
                      </p>
                    </div>
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-5"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Model and Color
                      </label>
                      <p
                        className="form-control fs-5"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        Peugeot 3008 | white
                      </p>
                    </div>
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-5"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Type
                      </label>
                      <p
                        className="form-control fs-5"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        Family
                      </p>
                    </div>
                  </div>
                  <div className="w-100 m-1 d-flex flex-column fs-5 ">
                    <label
                      htmlFor="photo-permit"
                      className="fs-5"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Vehicle Photo
                    </label>
                    <div className="m-auto mt-1 w-100 h-100 border rounded">
                      {" "}
                      photo{" "}
                    </div>
                  </div>
                </div>
                <div className="m-1">
                  <label
                    htmlFor="renter-name"
                    className="fs-5"
                    style={{ color: "var(--font-color-2)" }}
                  >
                    Spot Number
                  </label>
                  <p
                    className="form-control fs-5"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    0003
                  </p>
                </div>
                <div className="m-1">
                  <label
                    htmlFor="renter-name"
                    className="fs-5"
                    style={{ color: "var(--font-color-2)" }}
                  >
                    Problems
                  </label>
                  <p id="alert">Check the box if the problem is soloved</p>
                  <ul className="list-unstyled">
                    <li>
                      <div className="input-group mb-3">
                        <div className="d-flex justify-content-center input-group-text text-wrap">
                          <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            value=""
                          />
                          <div>
                            <span className="p-2 ">date</span>
                            <span className="p-2 ">justification</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex m-2 p-3 ">
              <label
                htmlFor="state"
                className="fs-5 mx-3"
                style={{ color: "var(--font-color-2)" }}
              >
                State
              </label>

              <Select
                className="vehicle-state w-100"
                classNamePrefix="select"
                defaultValue={vehicleState[0]}
                name="vehicle-state"
                options={vehicleState}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={displayStatusFrom}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={displayStatusFrom}
                style={{ background: "var(--btn_color1)", color: "white" }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusQRscanner = ({ displayStatusFrom }) => {
  const delay = 100;
  const [result, setResult] = useState();

  useEffect(() => {
    result !== undefined && displayStatusFrom();
  }, [result]);

  const handleError = (error) => {
    console.error(error);
  };
  
  return (
    <>
      <QrReader
        style={{
          width: "100%",
          height: "100%",
          border: "3px solid var(--bg_icon_color)",
          borderRadius: "10px",
        }}
        delay={delay}
        onError={handleError}
        onScan={(result) => setResult(result?.text)}
      />
    </>
  );
};

export const Status = () => {
  const vehicles = [];
  for (let i = 0; i < 3; i++) {
    vehicles.push(`bus/${i + 1}.png`);
    vehicles.push(`moto/${i + 1}.png`);
    vehicles.push(`van/${i + 1}.png`);
    vehicles.push(`car/${i + 1}.png`);
  }
  const [display, setDisplay] = useState(false);

  const displayStatusFrom = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  return (
    <div>
      <div className="p-3 d-flex flex-wrap justify-content-center" id="filterd">
        <div
          className="card m-1 my-auto"
          style={{
            maxHeight: "250px",
            maxWidth: "250px",
            borderRadius: "10px",
          }}
        >
          <StatusQRscanner displayStatusFrom={displayStatusFrom} />
          {display && <StatusForm displayStatusFrom={displayStatusFrom} />}
        </div>
        {vehicles.map((v, i) => (
          <button
            key={i}
            style={{
              height: "300px",
              width: "240px",
              borderRadius: "10px",
            }}
            onClick={displayStatusFrom}
            className="card p-3 m-1 border d-flex flex-column justify-content-between"
          >
            <div
              className="img-containe d-flex"
              style={{
                maxHeight: "55%",
                maxWidth: "100%",
              }}
            >
              <img
                className=" p-2"
                src={require(`../img/vehicles/${v}`)}
                alt="accent2016"
              />
            </div>

            <ul
              className="info d-flex flex-column"
              style={{
                maxHeight: "45%",
                maxWidth: "100%",
              }}
            >
              <li className="d-flex">123456 124 25</li>
              <li className="d-flex">Peugeot 3008 | white</li>
              <li className="d-flex">Family</li>
              <li className="d-flex">State</li>
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
};
