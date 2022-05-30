import Select from "react-select";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

const Check = ({ displayCheckFrom }) => {
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
              Ckeck Form
            </h4>
          </div>
          <div className="modal-body">
            <div className="driver-info d-flex flex-md-row flex-column m-2 p-3 border">
              <div className="w-100">
                <div className="m-1">
                  <label
                    htmlFor="renter-name"
                    className="fs-5"
                    style={{ color: "var(--font-color-2)" }}
                  >
                    Renter Name
                  </label>
                  <p
                    className="form-control fs-5"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    Safa Benabdessadok
                  </p>
                </div>
                <div className="m-1">
                  <label
                    htmlFor="dirver-name"
                    className="fs-5"
                    style={{ color: "var(--font-color-2)" }}
                  >
                    Dirver Name
                  </label>
                  <p
                    className="form-control fs-5"
                    id="dirver-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    Safa Benabdessadok
                  </p>
                </div>
              </div>
              <div className="w-100 m-1 d-flex flex-column fs-5 ">
                <label
                  htmlFor="photo-permit"
                  className="fs-5"
                  style={{ color: "var(--font-color-2)" }}
                >
                  Driver Photo
                </label>
                <div className="m-auto mt-1 w-100 h-100 border rounded">
                  photo
                </div>
              </div>
            </div>

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
                onClick={displayCheckFrom}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={displayCheckFrom}
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

export const CheckQRscanner = () => {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    result !== undefined && setDisplay(true);
  }, [result, display]);

  const handleError = (error) => {
    console.error(error);
  };

  const displayCheckFrom = () => {
    setDelay(100);
    setDisplay(false);
  };
  return (
    <>
      <QrReader
        style={{
          width: "100%",
          height: "100%",
          border: "3px solid var(--btn_color1)",
          borderRadius: "10px",
        }}
        delay={delay}
        onError={handleError}
        onScan={(result) => setResult(result?.text)}
      />
      {display && <Check displayCheckFrom={displayCheckFrom} />}
    </>
  );
};
