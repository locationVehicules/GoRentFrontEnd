import { Outlet, Navigate } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import React, { useEffect, useState } from "react";

export const RenterApp = () => {
  // !Enterprise ? userType=renterP : userType=renterE

  const sideBar = document.getElementById("sidebar");
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    sideBar === null ? setNavigate(true) : setNavigate(false);
  }, [sideBar]);

  return (
    <>
      <SideNavBar userType="renterE" userApp="Renter" />
      {navigate && <Navigate to="Renter/Rent" replace={true} />}
      <Outlet />
    </>
  );
};