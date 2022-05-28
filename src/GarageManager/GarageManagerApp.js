import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import { useEffect, useState } from "react";

export const GarageManagerApp = () => {
  const sideBar = document.getElementById("sidebar");
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    sideBar === null ? setNavigate(true) : setNavigate(false);
  }, [sideBar]);

  return (
    <>
      <SideNavBar userType="GarageManager" userApp="GarageManager" />
      {navigate && <Navigate to="GarageManager/Rent" replace={true} />}
      <Outlet />
    </>
  );
};
