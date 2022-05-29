import React, { useState, useEffect } from "react";
import { NavToggle } from "../scripts/script";
import "../css/gerer_stat_style.css";
import "../css/etablir_contrat.css";

export const Main = (props) => {
  // main size
  let mainSize;
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.contains("col-lg-1")
    ? (mainSize = "col-lg-11")
    : (mainSize = "col-lg-10");
  const [notiNum, setNotiNum] = useState(0);
  const [displayNoti, setDisplayNoti] = useState(false);

  useEffect(() => {
    notiNum !== 0 ? setDisplayNoti(true) : setDisplayNoti(false);
  }, [notiNum]);

  return (
    <main
      role="main"
      id="main"
      className={`d-flex flex-column ${mainSize} float-lg-end mt-5 mt-lg-0 p-3 p-lg-1 pt-lg-0 `}
    >
      <div
        className="d-flex sticky-top"
        style={{ background: "var(--body-color1)" }}
      >
        <nav className="navbar d-flex w-100">
          <button
            id="navbar-toggler-btn"
            type="button"
            onClick={NavToggle.bind()}
          >
            <i className="bi bi-list fs-1"></i>
          </button>
          <h2> {props.title}</h2>
        </nav>
        <div className="w-100 d-flex justify-content-end">
          <div className="navbar-nav d-flex flex-column btn-group">
            <button
              className="btn p-3"
              type="button"
              id="dropdownMenuButton position-absolute"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-bell-fill fs-4 position-relative d-flex ">
                {displayNoti && (
                  <span className="border border-light translate-middle badge rounded-circle">
                    {notiNum}
                  </span>
                )}
              </i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-left position-absolute"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item text-wrap border-bottom" href="/">
                Your reservation is accepted
              </a>
              <a className="dropdown-item text-wrap border-bottom" href="/">
                Your Signature is accepted
              </a>
              <a className="dropdown-item text-wrap border-bottom" href="/">
                New Contract need acceptation
              </a>
              <a className="dropdown-item text-wrap border-bottom" href="/">
                New Signed Contract need acceptation
              </a>
              <a className="dropdown-item text-wrap border-bottom" href="/">
                New Signed Contract need acceptation
              </a>
              <a className="dropdown-item text-wrap border-bottom" href="/">
                New Signed Contract need acceptation New Signed Contract need
                acceptation New Signed Contract need acceptation New Signed
                Contract need acceptation
              </a>
            </div>
          </div>
        </div>
      </div>

      {props.children}
    </main>
  );
};
