import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import { useEffect, useState } from "react";

export const OwnerApp = () => {
  const sideBar = document.getElementById("sidebar");
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    sideBar === null ? setNavigate(true) : setNavigate(false);
  }, [sideBar]);

  return (
    <>
      <SideNavBar userType="owner" userApp="Owner" />
      {navigate && <Navigate to="Owner/Black-list" replace={true} />}
      <Outlet />
    </>
  );
};
