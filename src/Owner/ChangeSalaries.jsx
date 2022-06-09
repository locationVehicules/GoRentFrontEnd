import React, { useState, useEffect } from "react";
import { Main } from "../components/Main";
import QrReader from "react-qr-scanner";
import CarsAPIs from "../GetSetData/useAPIs/CarsAPIs";
import { Link } from "react-router-dom";

import "../css/gerer_vehicules_style.css";

export const ChangeSalaries = () => {
  return (
    <Main title={"Change Employees Salaries"}>
      <div>
        <div>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="Ckeck Form">
                Change Vehicle Prices
              </h4>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-md-row flex-column ">
                <div className="w-100 m-1 d-flex flex-column fs-6">
                  <div>
                    <label
                      htmlFor="renter-name"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Registration Number
                    </label>
                    <p
                      className="form-control fs-6"
                      id="renter-name"
                      style={{
                        border: 0,
                        borderBottom: "2px solid var(--font-color-2)",
                      }}
                    ></p>
                  </div>
                  <div>
                    <label
                      htmlFor="renter-name"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Name and Model
                    </label>
                    <p
                      className="form-control fs-6"
                      id="renter-name"
                      style={{
                        border: 0,
                        borderBottom: "2px solid var(--font-color-2)",
                      }}
                    ></p>
                  </div>
                </div>
                <div className="w-100 m-1 d-flex flex-column fs-6 ">
                  <label
                    htmlFor="photo-permit"
                    className="fs-6"
                    style={{ color: "var(--font-color-2)" }}
                  >
                    Vehicle Photo
                  </label>
                  <div
                    className="img-containe d-flex"
                    style={{
                      maxHeight: "90%",
                      maxWidth: "90%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <div className="d-flex flex-column">
                  <h6 style={{ fontWeight: "bold" }}>
                    Price for one day (DZD)
                  </h6>
                  <div className="d-flex flex-column flex-md-row">
                    <div className="m-1 w-100">
                      <label
                        htmlFor="old-d-price"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Old price
                      </label>
                      <p
                        className="form-control fs-6"
                        id="old-d-price"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      ></p>
                    </div>
                    <div className="m-1 w-100">
                      <label
                        htmlFor="new-price"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        New price
                      </label>
                      <input
                        type="number"
                        name="new-price"
                        className="form-control mt-1"
                        id="new-price"
                        required
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                          height: "34px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h6 style={{ fontWeight: "bold" }}>
                    Price for one hour (DZD)
                  </h6>
                  <div className="d-flex flex-column flex-md-row">
                    <div className="m-1 w-100">
                      <label
                        htmlFor="old-d-price"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Old price
                      </label>
                      <p
                        className="form-control fs-6"
                        id="old-d-price"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      ></p>
                    </div>
                    <div className="m-1 w-100">
                      <label
                        htmlFor="new-h-price"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        New price
                      </label>
                      <input
                        type="number"
                        name="new-price"
                        className="form-control mt-1"
                        id="new-h-price"
                        required
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                          height: "34px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: "var(--btn_color1)", color: "white" }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </Main>
  );
};
