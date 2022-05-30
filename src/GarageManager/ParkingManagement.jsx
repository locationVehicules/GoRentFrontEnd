import React, { useState } from "react";
import { Main } from "../components/Main";
import { CheckQRscanner } from "./check";
import { Status } from "./status";

export const ParkingManagement = () => {
  return (
    <Main title={"Parking Management"}>
      <GarageManager />
    </Main>
  );
};

const GarageManager = () => {
  const [status, setStatus] = useState(false);
  const [check, setCheck] = useState(true);

  const [statusActive, setStatusActive] = useState("");
  const [checkActive, setCheckActive] = useState("active");
  const ChangeFunction = (e) => {
    if (e.target.value === "status") {
      setStatus(true);
      setCheck(false);
      setStatusActive("active");
      setCheckActive("");
    } else {
       setStatus(false);
       setCheck(true);
      setStatusActive("");
      setCheckActive("active");
    }
  };
  return (
    <>
      <div className="btn-group" role="group" aria-label="">
        <button
          type="button"
          className={`btn btn btn-secondary navbtns ${statusActive}`}
          onClick={ChangeFunction}
          value="status"
          style={{
            backgroundColor: "var(--btn_color1)",
            fontWeight: "bold",
          }}
        >
          Change vehicle state
        </button>
        <button
          type="button"
          className={`btn btn btn-secondary navbtns ${checkActive}`}
          onClick={ChangeFunction}
          value="check"
          style={{
            backgroundColor: "var(--btn_color1)",
            fontWeight: "bold",
          }}
        >
          Manage Check in and Check Out of vehicles
        </button>
      </div>

      {status && <Status />}

      {check && (
        <div className="qr-scanner w-50 h-50 m-auto my-3">
          <CheckQRscanner />
        </div>
      )}
    </>
  );
};
