import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Pay } from "./Pay/Pay";

import { LandingPage } from "./publicPages/publicPages";
import { Login, SignUp, GetRenterInfos } from "./publicPages/LogPages";
import { SearchResultPage } from "./publicPages/SearchResultPage";
import { SelectedVehiclePage } from "./publicPages/SelectedVehiclePage";

import { Page404 } from "./components/Page404";
import { Rent } from "./User/Rent";
import { Rentals } from "./User/Rentals";
import { ContactAdministrator } from "./User/ContactAdministrator";
import { Settings } from "./User/Settings";
import { MyContract } from "./User/MyContract";
import { SearchResult } from "./User/SearchResult";
import { SelectedVehicle } from "./User/SelectedVehicle";
import { Payment } from "./User/Payment";

import { ParkingManagement } from "./GarageManager/ParkingManagement";

import { UserManagement } from "./Admin/UserManagement";
import { QuestionsManagement } from "./Admin/QuestionsManagement";
import { VehiclesManagement } from "./Admin/VehiclesManagement";

import { IdentifyDriver } from "./Renter/IdentifyDriver";
import { RemoveDriver } from "./Renter/RemoveDriver";

import { BlackList } from "./Owner/BlackList";
import { ChangePrices } from "./Owner/ChangePrices";
import { ReclamationManagement } from "./Owner/ReclamationManagement";
import { Status } from "./Owner/Status";

import { RentalsManagement } from "./Secretariat/RentalsManagement";
import { Contract } from "./Secretariat/Contract";

import { AdminApp } from "./Admin/AdminApp";
import { GarageManagerApp } from "./GarageManager/GarageManagerApp";
import { OwnerApp } from "./Owner/OwnerApp";
import { RenterApp } from "./Renter/RenterApp";
import { SecretariatApp } from "./Secretariat/SecretariatApp";

import React, { useState } from "react";

import { Reservation } from "./GetSetData/Contexts";

export const App = () => {
  let currentDate = new Date();
  currentDate.setMinutes(
    currentDate.getMinutes() - currentDate.getTimezoneOffset()
  );
  currentDate.setHours(currentDate.getHours() + 1);
  currentDate = currentDate.toISOString().slice(0, 16);

  let afterHcurrentDate = new Date();
  afterHcurrentDate.setMinutes(
    afterHcurrentDate.getMinutes() - afterHcurrentDate.getTimezoneOffset()
  );
  afterHcurrentDate.setHours(afterHcurrentDate.getHours() + 2);
  afterHcurrentDate = afterHcurrentDate.toISOString().slice(0, 16);
  // Reservation data
  const [rentDate, setRentDate] = useState(currentDate);
  const [returnDate, setReturnDate] = useState(afterHcurrentDate);
  const [rentLocation, setRentLocation] = useState("Adrar");
  const [returnLocation, setReturnLocation] = useState("Adrar");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedParking, setSelectedParking] = useState(null);
  const [calcMethod, setCalcMethod] = useState(null);
  const [total, setTotal] = useState(0);
  const [tools, setTools] = useState("");

  return (
    <>
      <Reservation.Provider
        value={{
          rentDate: [rentDate, setRentDate],
          returnDate: [returnDate, setReturnDate],
          rentLocation: [rentLocation, setRentLocation],
          returnLocation: [returnLocation, setReturnLocation],
          selectedVehicle: [selectedVehicle, setSelectedVehicle],
          selectedParking: [selectedParking, setSelectedParking],
          calcMethod: [calcMethod, setCalcMethod],
          total: [total, setTotal],
          tools: [tools, setTools],
        }}
      >
        <Router>
          <Routes>
            <Route exact index path="/" element={<LandingPage />} />
            <Route exact index path="/Pay" element={<Pay />} />
            <Route
              exact
              path="SearchResultPage"
              element={<SearchResultPage />}
            />
            <Route
              exact
              path="SelectedVehiclePage"
              element={<SelectedVehiclePage />}
            />
            <Route exact path="GetRenterInfos" element={<GetRenterInfos />} />
            <Route exact path="Login" element={<Login />} />
            <Route exact path="SignUp" element={<SignUp />} />
            <Route path="*" element={<Page404 />} />
            <Route exact path="Admin" element={<AdminApp />}>
              <Route
                path="Admin/Rent/SelectedVehicle"
                element={<SelectedVehicle user={"Admin"} />}
              />
              <Route
                path="Admin/Rent/Payment"
                element={<Payment user={"Admin"} />}
              />
              <Route exact path="Admin/Settings" element={<Settings />} />
              <Route
                path="Admin/User-management"
                element={<UserManagement />}
              />
              <Route
                exact
                path="Admin/Vehicles-management"
                element={<VehiclesManagement />}
              />
              <Route
                exact
                path="Admin/Questions-management"
                element={<QuestionsManagement />}
              />
              <Route
                exact
                path="Admin/Contact-administrator"
                element={<ContactAdministrator />}
              />
              <Route
                exact
                path="Admin/Rent"
                element={<Rent user={"Admin"} />}
              />
              <Route
                path="Admin/Rent/SearchResult"
                element={<SearchResult user={"Admin"} />}
              />
              <Route
                exact
                path="Admin/Rentals"
                element={<Rentals user={"Admin"} />}
              />
              <Route
                path="Admin/Rentals/MyContract"
                element={<MyContract user={"Admin"} />}
              />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route exact path="GarageManager" element={<GarageManagerApp />}>
              <Route
                path="GarageManager/Rent/SelectedVehicle"
                element={<SelectedVehicle user={"GarageManager"} />}
              />
              <Route
                path="GarageManager/Rent/Payment"
                element={<Payment user={"GarageManager"} />}
              />
              <Route
                exact
                path="GarageManager/Rent"
                element={<Rent user={"GarageManager"} />}
              />
              <Route
                path="GarageManager/Rent/SearchResult"
                element={<SearchResult user={"GarageManager"} />}
              />
              <Route
                exact
                path="GarageManager/Settings"
                element={<Settings />}
              />
              <Route
                exact
                path="GarageManager/Contact-administrator"
                element={<ContactAdministrator />}
              />
              <Route
                exact
                path="GarageManager/Rentals"
                element={<Rentals user={"GarageManager"} />}
              />
              <Route
                exact
                path="GarageManager/Parking-management"
                element={<ParkingManagement />}
              />
              <Route
                path="GarageManager/Rentals/MyContract"
                element={<MyContract user={"GarageManager"} />}
              />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route exact path="Owner" element={<OwnerApp />}>
              <Route
                path="Owner/Rent/SelectedVehicle"
                element={<SelectedVehicle user={"Owner"} />}
              />
              <Route
                path="Owner/Rent/Payment"
                element={<Payment user={"Owner"} />}
              />
              <Route path="Owner/Black-list" element={<BlackList />} />
              <Route
                path="Owner/Reclamation-management"
                element={<ReclamationManagement />}
              />
              <Route path="Owner/Change-prices" element={<ChangePrices />} />
              <Route path="Owner/Status" element={<Status />} />

              <Route
                exact
                path="Owner/Rent"
                element={<Rent user={"Owner"} />}
              />
              <Route
                path="Owner/Rent/SearchResult"
                element={<SearchResult user={"Owner"} />}
              />
              <Route
                exact
                path="Owner/Rentals"
                element={<Rentals user={"Owner"} />}
              />
              <Route
                exact
                path="Owner/Contact-administrator"
                element={<ContactAdministrator />}
              />
              <Route exact path="Owner/Settings" element={<Settings />} />
              <Route
                path="Owner/Rentals/MyContract"
                element={<MyContract user={"Owner"} />}
              />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route exact path="Renter" element={<RenterApp />}>
              <Route
                path="Renter/Rent/SelectedVehicle"
                element={<SelectedVehicle user={"Renter"} />}
              />
              <Route
                path="Renter/Rent/Payment"
                element={<Payment user={"Renter"} />}
              />
              <Route path="Renter/Rent" element={<Rent user={"Renter"} />} />
              <Route
                path="Renter/Rent/SearchResult"
                element={<SearchResult user={"Renter"} />}
              />
              <Route
                path="Renter/Rentals"
                element={<Rentals user={"Renter"} />}
              />
              <Route
                path="Renter/Identify-driver"
                element={<IdentifyDriver />}
              />
              <Route path="Renter/Drivers-list" element={<RemoveDriver />} />
              <Route
                path="Renter/Contact-administrator"
                element={<ContactAdministrator />}
              />
              <Route path="Renter/Settings" element={<Settings />} />
              <Route
                path="Renter/Rentals/MyContract"
                element={<MyContract user={"Renter"} />}
              />
              <Route path="*" element={<RenterApp />} />
            </Route>
            <Route exact path="Secretary" element={<SecretariatApp />}>
              <Route
                path="Secretary/Rent/SelectedVehicle"
                element={<SelectedVehicle user={"Secretary"} />}
              />
              <Route
                path="Secretary/Rent/Payment"
                element={<Payment user={"Secretary"} />}
              />
              <Route
                path="Secretary/Rentals-management"
                element={<RentalsManagement />}
              />
              <Route
                path="Secretary/User-management"
                element={<UserManagement />}
              />
              <Route
                path="Secretary/Vehicles-management"
                element={<VehiclesManagement />}
              />
              <Route path="Secretary/Black-list" element={<BlackList />} />
              <Route
                path="Secretary/Rent"
                element={<Rent user={"Secretary"} />}
              />
              <Route
                path="Secretary/Rentals"
                element={<Rentals user={"Secretary"} />}
              />
              <Route
                path="Secretary/Contact-administrator"
                element={<ContactAdministrator />}
              />
              <Route path="Secretary/Settings" element={<Settings />} />
              <Route path="*" element={<SecretariatApp />} />
              <Route
                path="Secretary/Rentals-management/Contract"
                element={<Contract user={"Secretary"} />}
              />
              <Route
                path="Secretary/Rentals/MyContract"
                element={<MyContract user={"Secretary"} />}
              />
              <Route
                path="Secretary/Rent/SearchResult"
                element={<SearchResult user={"Secretary"} />}
              />
            </Route>
          </Routes>
        </Router>
      </Reservation.Provider>
    </>
  );
};
