import Select from "react-select";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import CarsAPIs from "../GetSetData/useAPIs/CarsAPIs";

const StatusForm = ({ displayStatusFrom }) => {
  const vehicleState = [
    { value: "rented", label: "Rented" },
    { value: "available", label: "Available" },
    { value: "under", label: "Under" },
    { value: "reserved", label: "Reserved" },
    { value: "broken", label: "Broken" },
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

  const [display, setDisplay] = useState(false);

  const displayStatusFrom = () => {
    display ? setDisplay(false) : setDisplay(true);
  };

  const [vehicles, setVehicles] = useState();
  const [data, setData] = useState(false);

  const getVehicleList = async () => {
    await CarsAPIs.carsList().then((data) =>
      setVehicles(data.filter((data) => data.etat !== "not available"))
    );
    setData(true);
  };
  useEffect(() => {
    getVehicleList();
  }, [data]);

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
        {vehicles &&
          vehicles.map((v, i) => (
            <button
              onClick={() => {}}
              key={i}
              style={{
                width: "240px",
                borderRadius: "10px",
              }}
              className="card p-3 m-1 border d-flex flex-column justify-content-between"
            >
              <div
                className="img-containe d-flex"
                style={{
                  maxHeight: "50%",
                  maxWidth: "100%",
                }}
              >
                <img
                  className=" p-2"
                  src={`https://cdn.imagin.studio/getImage?customer=img&${v.photo
                    .replaceAll("%3D", "=")
                    .replace(
                      "%26",
                      "&"
                    )}&angle=23&width=2600&zoomType=fullscreen`}
                  alt={`${v.name}_photo`}
                />
              </div>
              <ul
                className="info list-unstyled d-flex flex-column align-items-start"
                style={{
                  maxHeight: "50%",
                  maxWidth: "100%",
                }}
              >
                <li>
                  <i
                    className="bi bi-123 px-1 py-0 fs-5"
                    style={{
                      color: "black",
                      border: "1px solid black",
                      borderRadius: "6px",
                    }}
                  ></i>
                  <span className="px-1">{v.matricule} </span>
                </li>
                <li>
                  <img
                    style={{
                      maxHeight: "40px",
                      marginRight: "10px",
                    }}
                    src="https://img.icons8.com/ios-filled/50/000000/audi.png"
                    alt="audi"
                  />
                  {v.name}
                </li>
                <li>
                  <i className="bi bi-slack fs-5" style={{ color: "black" }}></i>
                  <span>{`${v.modele}`} </span>
                </li>
                <li>
                  <i
                    className="bi bi-clipboard-pulse fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span>{`${v.etat}`} </span>
                </li>
                <li>
                  <i className="bi bi-geo fs-5" style={{ color: "black" }}></i>
                  <span>{`Spot: ${v.spotLetter}-${v.spotNumber}`} </span>
                </li>
              </ul>
            </button>
          ))}
      </div>
    </div>
  );
};
