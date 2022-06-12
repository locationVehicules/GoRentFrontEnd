import Select from "react-select";
import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import ContartAPIs from "../GetSetData/useAPIs/ContartAPIs";
import CarsAPIs from "../GetSetData/useAPIs/CarsAPIs";
import ReservationAPIs from "../GetSetData/useAPIs/ReservationAPIs";
import AdministrationAPIs from "../GetSetData/useAPIs/AdministrationAPIs";

const CheckOut = ({ displayCheckOutFrom, data }) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    saved && displayCheckOutFrom();
  }, [saved])
  
  const save = () => {
    updateReservation();
    updateCar();
    data[3].map((t) => updateTool(t.id));
    
    console.log("schecked out");
    setSaved(true)
  };

  const updateReservation = async () => {
    let newState = {
      issue_date: data[0].issue_date,
      return_date: data[0].return_date,
      issue_location: data[0].issue_location,
      return_location: data[0].return_location,
      state: "active",
      car_rented: data[0].car_rented,
      Driver: data[0].Driver,
      Renter: data[0].Renter,
      sort_checker: JSON.parse(localStorage.getItem("garage_manager")),
    };
    await ReservationAPIs.ReservationUpdate(data[0].id, newState);
  };
  const updateCar = async () => {
    await CarsAPIs.UpdateCarState(data[2].id, "rented");
  };
  const updateTool = async (id) => {
    await CarsAPIs.UpdatetoolState(id, "rented");
  };
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Ckeck Out Form
            </h4>
          </div>
          <div className="modal-body">
            <h5
              style={{
                border: 0,
                borderBottom: "3px solid var(--btn_color1_1)",
              }}
            >
              Driver and Vehicle
            </h5>
            <div className="driver-info d-flex flex-md-row flex-column mb-2 p-1">
              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="dirver-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Dirver
                  </label>
                  <p
                    className="form-control fs-6"
                    id="dirver-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    {data[0].DriverFName} {data[0].DriverLName}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="renter-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Vehicle
                  </label>
                  <p
                    className="form-control fs-6"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    {data[2].name} | {data[2].couleur}
                  </p>
                </div>
              </div>
              <div className="w-100 mx-1 ">
                <div>
                  <label
                    htmlFor="dirver-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Registration Number
                  </label>
                  <p
                    className="form-control fs-6"
                    id="dirver-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    {data[2].matricule}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="renter-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Spot
                  </label>
                  <p
                    className="form-control fs-6"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    {data[2].spotLetter} - {data[2].spotNumber}
                  </p>
                </div>
              </div>
            </div>
            {data[3].lenght !== 0 && (
              <div className="d-flex justify-content-center align-items-center">
                <label
                  htmlFor="renter-name"
                  className="fs-6 mx-1"
                  style={{ color: "var(--font-color-3)" }}
                >
                  Tools
                </label>
                <p
                  className="form-control fs-6"
                  id="renter-name"
                  style={{
                    border: 0,
                    borderBottom: "2px solid var(--font-color-2)",
                  }}
                >
                  {data[3].map((m) => (
                    <span>
                      {m.name}
                      <span
                        className="fs-5"
                        style={{
                          color: "var(--font-color-2)",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            )}

            <div className="vehicle-info d-flex flex-md-row flex-column p-1 mb-2 ">
              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="photo-permit"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Driver Photo
                  </label>
                  <div
                    className="img-containe d-flex "
                    style={{
                      maxHeight: "30%",
                      maxWidth: "60%",
                    }}
                  >
                    <img
                      className=" p-2"
                      src={`http://127.0.0.1:8000${data[1].image_id}`}
                      alt={`Driver_photo`}
                    />
                  </div>
                </div>
              </div>

              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="photo-permit"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Vehicle Photo
                  </label>
                  <div
                    className="img-containe d-flex"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      className=" p-2"
                      src={`https://cdn.imagin.studio/getImage?customer=img&${data[2].photo
                        .replaceAll("%3D", "=")
                        .replace(
                          "%26",
                          "&"
                        )}&angle=23&width=2600&zoomType=fullscreen`}
                      alt={`${data[2].Name}_photo`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={displayCheckOutFrom}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => save()}
                style={{ background: "var(--btn_color1)", color: "white" }}
              >
                Check Out
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
  const [displayQR, setDisplayQR] = useState(true);
  const [displayOut, setDisplayOut] = useState(false);
  const [displayIn, setDisplayIn] = useState(false);
  const [display, setDisplay] = useState(false);

  const [contract, setContract] = useState(null);
  const [renting, setRenting] = useState(null);
  const [driver, setDriver] = useState(null);
  const [car, setCar] = useState(null);
  const [tools, setTools] = useState(null);
  const [garagist, setGaragist] = useState(null);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    result !== undefined && getContact();
    result !== undefined && setDisplayQR(false);
  }, [result]);
  useEffect(() => {
    contract && getReservation();
  }, [contract]);
  useEffect(() => {
    renting && getDriver();
  }, [renting]);
  useEffect(() => {
    driver && getCar();
  }, [driver]);
  useEffect(() => {
    car && getTools();
  }, [car]);
  useEffect(() => {
    tools && getGaragist();
  }, [tools]);
  useEffect(() => {
    garagist && Validate();
  }, [garagist]);

  const getContact = async () => {
    await ContartAPIs.ContratDetail(parseInt(result)).then((data) =>
      setContract(data)
    );
  };
  const getReservation = async () => {
    await ReservationAPIs.reservationDetail(contract.reservation).then((data) =>
      setRenting(data)
    );
  };
  const getDriver = async () => {
    await AdministrationAPIs.DriverDetail(renting.DriveruserID).then((data) =>
      setDriver(data)
    );
  };
  const getCar = async () => {
    await CarsAPIs.IdCarDetail(renting.car_rented).then((data) => setCar(data));
  };
  const getTools = () => {
    let tool = [];
    renting.tool_rented &&
      renting.tool_rented.map((t) =>
        getTool(t).then((data) => tool.push(data))
      );
    setTools(tool);
  };
  const getGaragist = async () => {
    let gId = JSON.parse(localStorage.getItem("garage_manager"));
    await AdministrationAPIs.GaragistDetail(gId).then((data) =>
      setGaragist(data)
    );
  };
  const getTool = async (id) => {
    return await CarsAPIs.toolDetail(id).then((data) => data);
  };
  const Validate = () => {
    let validateOutDate = false,
      validateInDate = false,
      validateParking = false,
      validateOutState = false,
      validateInState = false;

    let issue_date = new Date(renting.issue_date);
    let return_date = new Date(renting.return_date);
    let now = new Date();
    if (return_date >= now && now >= issue_date) validateOutDate = true;
    if (return_date >= now) validateInDate = true;
    if (car.parking === garagist.parcking) validateParking = true;
    if (renting.state === "completed") validateOutState = true;
    if (renting.state === "active") validateInState = true;

    setData([renting, driver, car, tools]);
    if (validateOutDate && validateParking && validateOutState) {
      displayCheckOutFrom();
    } else if (validateInDate && validateParking && validateInState) {
      //neet parking location to check in return parking is in renting retun location
      //neet get vehicle problems
      displayCheckInFrom();
    } else if (!validateInDate && validateParking && validateInState) {
      //neet parking location to check in return parking is in renting retun location
      //neet get vehicle problems
      // call add infraction with cause of nb hours of late
      displayCheckInFrom();
    } else {
      if (validateOutDate) setMessage("Out of time");
      else if (validateParking) setMessage("Not in this parking");
      else if (validateInState) setMessage("Invalid reservation");
      displayConfiramtion();
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const displayCheckOutFrom = () => {
    if (displayOut) {
      setDisplayQR(true);
      setDisplayOut(false);
    } else {
      setDisplayQR(false);
      setDisplayOut(true);
    }
  };
  const displayCheckInFrom = () => {
    if (displayIn) {
      setDisplayQR(true);
      setDisplayIn(false);
    } else {
      setDisplayQR(false);
      setDisplayIn(true);
    }
  };
  const displayConfiramtion = () => {
    if (display) {
      setDisplayQR(true);
      setDisplay(false);
    } else {
      setDisplayQR(false);
      setDisplay(true);
    }
  };
  return (
    <>
      {displayQR && (
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
      )}
      {displayOut && (
        <CheckOut displayCheckOutFrom={displayCheckOutFrom} data={data} />
      )}
      {displayIn && (
        <CheckIn displayCheckInFrom={displayCheckInFrom} data={data} />
      )}
      {display && (
        <Confirmation
          displayConfiramtion={displayConfiramtion}
          message={message}
        />
      )}
    </>
  );
};

const CheckIn = ({ displayCheckInFrom }) => {
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Ckeck Out Form
            </h4>
          </div>
          <div className="modal-body">
            <h5
              style={{
                border: 0,
                borderBottom: "3px solid var(--btn_color1_1)",
              }}
            >
              Driver and Vehicle
            </h5>
            <div className="driver-info d-flex flex-md-row flex-column mb-2 p-1">
              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="dirver-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Dirver
                  </label>
                  <p
                    className="form-control fs-6"
                    id="dirver-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    Safa Benabdessadok
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="renter-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Vehicle
                  </label>
                  <p
                    className="form-control fs-6"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    Peugeot 3008 | white
                  </p>
                </div>
              </div>
              <div className="w-100 mx-1 ">
                <div>
                  <label
                    htmlFor="dirver-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Registration Number
                  </label>
                  <p
                    className="form-control fs-6"
                    id="dirver-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    123456 124 25
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="renter-name"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Spot
                  </label>
                  <p
                    className="form-control fs-6"
                    id="renter-name"
                    style={{
                      border: 0,
                      borderBottom: "2px solid var(--font-color-2)",
                    }}
                  >
                    A - 1
                  </p>
                </div>
              </div>
            </div>
            <div className="vehicle-info d-flex flex-md-row flex-column p-1 mb-2 ">
              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="photo-permit"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Driver Photo
                  </label>
                  <div
                    className="img-containe d-flex"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "50%",
                    }}
                  >
                    <img className=" p-2" src={""} alt={`${"Driver"}_photo`} />
                  </div>
                </div>
              </div>

              <div className="w-100 mx-1">
                <div>
                  <label
                    htmlFor="photo-permit"
                    className="fs-6"
                    style={{ color: "var(--font-color-3)" }}
                  >
                    Vehicle Photo
                  </label>
                  <div
                    className="img-containe d-flex"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "50%",
                    }}
                  >
                    <img className=" p-2" src={""} alt={`${"Driver"}_photo`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={displayCheckInFrom}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={displayCheckInFrom}
                style={{ background: "var(--btn_color1)", color: "white" }}
              >
                Check In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Confirmation = ({ displayConfiramtion, message }) => {
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-sm"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-body">
            <i
              className="bi bi-x-circle m-3 d-flex justify-content-center text-danger"
              style={{ fontSize: "55px" }}
            ></i>
            <p className="d-flex px-3 justify-content-center fs-5">{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn accept-btn"
              data-dismiss="modal"
              onClick={() => displayConfiramtion()}
              style={{ color: "black" }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
