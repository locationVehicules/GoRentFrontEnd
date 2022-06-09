import React, { useState } from "react";
import { Main } from "../components/Main";
import { AddRemoveTable } from "../components/tables";

export const BlackList = () => {
  const renters = [];
  const renter = [
    "SB19042019",
    "BENABDESSADOK Safa",
    "21-04-2022",
    " make a lot of ifraction",
  ];
  for (let i = 0; i < 30; i++) {
    renters.push(renter);
  }
  const [display, setDisplay] = useState(false);
  const [userID, setUserID] = useState();

  const displayConfirmation = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const unblock = (e) => {
    displayConfirmation();
    !userID && setUserID(e);
  };
  const yesFunction = async () => {
    console.log(`${userID} unblocked`);
  };
  return (
    <Main title={"Black List"}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div id="search" className="d-flex m-1 mx-lg-2 px-3">
            <form className="d-flex">
              <i className="bi bi-search fs-5"></i>
              <input
                className="form-control form-control-sm ml-3 fs-6"
                type="text"
                placeholder="Search renter"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
        <AddRemoveTable
          headerList={["Renter ID", "Full Name", "Date", "Justification"]}
          bodyLines={renters}
          btnValue={"Unblock"}
          functionBtn={unblock}
        />
        {display && (
          <Confirmation
            displayConfirmation={displayConfirmation}
            yesFunction={yesFunction}
            confirmationText={" You want to unblock this driver?"}
          />
        )}
      </div>
    </Main>
  );
};

export const Confirmation = ({
  displayConfirmation,
  confirmationText,
  yesFunction,
}) => {
  const yes = () => {
    yesFunction();
    displayConfirmation();
  };
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
            <p className="d-flex px-3 justify-content-center fs-5">
              {confirmationText}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn refuse-btn"
              data-dismiss="modal"
              onClick={displayConfirmation}
            >
              No
            </button>
            <button
              type="button"
              className="btn accept-btn"
              data-dismiss="modal"
              onClick={()=>yes()}
              style={{ color: "black" }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
