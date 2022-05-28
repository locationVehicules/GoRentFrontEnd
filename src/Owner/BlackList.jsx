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

  const displayAddForm = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const unblock = (e) => {
    console.log(e.target);
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
          <button
            onClick={displayAddForm}
            type="button"
            className="btn mx-lg-2 m-1 d-flex justify-content-center align-items-center print-btn rounded-circle"
          >
            <i className="bi bi-plus-lg fs-6"></i> Add
          </button>
        </div>
        {display && <AddForm displayAddForm={displayAddForm} />}
        <AddRemoveTable
          headerList={["Renter ID", "Full Name", "Date", "Justification"]}
          bodyLines={renters}
          btnValue={"Unblock"}
          functionBtn={unblock}
        />
      </div>
    </Main>
  );
};

const AddForm = ({ displayAddForm }) => {
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

  const displayConfirmation = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const block = (e) => {
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
        className="modal-dialog modal-dialog-centered  modal-lg"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Block renter
            </h4>
          </div>
          <div className="modal-body">
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

            <AddRemoveTable
              headerList={["Renter ID", "Full Name", "Date", "Justification"]}
              bodyLines={renters}
              btnValue={"block"}
              functionBtn={block}
            />
            {display && (
              <Confirmation
                displayConfirmation={displayConfirmation}
                confirmationText={
                  "If you block this renter, he will never can rent vehicles from GoRent agencys"
                }
              />
            )}

            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={displayAddForm}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Confirmation = ({ displayConfirmation, confirmationText }) => {
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
              onClick={displayConfirmation}
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
