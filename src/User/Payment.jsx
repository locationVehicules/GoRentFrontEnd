import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "../components/Main";
import { DriverInfos, PaimentInfos } from "./GetInfos";

export const Payment = ({ user }) => {
  const [display, setDisplay] = useState(false);

  const displayConfirmation = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <Main title={"Rent"}>
      <DriverInfos enterprise={true} />
      <PaimentInfos path={`${user}/${user}`} />
      <hr className="mb-4" />
      <div className="btn d-flex justify-content-end align-items-center">
        <button
          className="btn"
          style={{
            borderRadius: "10px",
            height: 40,
            color: "white",
            background: "var(--pr1)",
          }}
          onClick={() => {
            displayConfirmation();
          }}
        >
          Continue to checkout
        </button>
      </div>
      {display && <Confirmation user={user} />}
    </Main>
  );
};

export const Confirmation = ({ user }) => {
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
          <div className="modal-body">
            <div className="text-success">
              <i
                className="bi bi-check-circle m-3 d-flex justify-content-center text-success"
                style={{ fontSize: "55px" }}
              ></i>
              <p className=" d-flex justify-content-center fs-3">Success</p>
            </div>
            <p className="d-flex pt-2 px-3 justify-content-center fs-5">
              Your reservation passed successfully!
            </p>
          </div>
          <div className="modal-footer">
            <Link
              to={`/${user}/${user}/Rent`}
              className="btn accept-btn fs-5"
              data-dismiss="modal"
              style={{ color: "black" }}
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
