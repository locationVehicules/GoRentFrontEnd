import { Outlet, Navigate } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import React , { useEffect, useState } from "react";

export const SecretariatApp = () => {
  const sideBar = document.getElementById("sidebar");
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    sideBar === null ? setNavigate(true) : setNavigate(false);
  }, [sideBar]);

  return (
    <>
      <SideNavBar userType="secretary" userApp="Secretary" />
      {navigate && (
        <Navigate to="Secretary/Rentals-management" replace={true} />
      )}
      <Outlet />
    </>
  );
};