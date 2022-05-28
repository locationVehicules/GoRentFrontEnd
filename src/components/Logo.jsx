import React from "react";

export const Logo = (userApp) => {
  return (
    <>
      <a href="index" className="d-block text-decoration-none">
        <span id="logo" className="brand fs-1 fw-bold">
          LOGO
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#side-navbar"
        aria-controls="side-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list fs-1"></i>
      </button>
    </>
  );
};
