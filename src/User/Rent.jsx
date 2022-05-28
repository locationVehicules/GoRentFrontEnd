import React from "react";
import { Main } from "../components/Main";
import { FindVehicle } from "../publicPages/LandingPage";

export const Rent = ({ user }) => {
  return (

    <Main title={"Rent"}>
      <FindVehicle path={`${user}/${user}/Rent/SearchResult`} />
    </Main>
  );
};
