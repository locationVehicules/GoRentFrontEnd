import React from "react";
import { Main } from "../components/Main";
import { ScrollTop } from "../components/ScrollTop";
import {
  DisplatDatesPlaces,
  Catégories,
} from "../publicPages/SearchResultPage";

export const SearchResult = ({ user }) => {
  const vehicles = [
    {
      path: "car/",
    },
    {
      path: "bus/",
    },
    {
      path: "moto/",
    },
    {
      path: "van/",
    },
  ];
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Main title={"Rent"}>
      <ScrollTop />
      <DisplatDatesPlaces />
      <Catégories
        vehicles={vehicles}
        path={`${user}/${user}/Rent/SelectedVehicle`}
      />
    </Main>
  );
};
