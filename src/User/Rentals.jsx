import React, { useState, useContext, useEffect } from "react";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../css/etablir_contrat.css";
import { Reservation } from "../GetSetData/Contexts";

export const Rentals = ({ user }) => {
  const [title, setTitle] = useState("All contracts");
  const vehicles = [];
  for (let i = 0; i < 3; i++) {
    vehicles.push(`bus/${i + 1}.png`);
    vehicles.push(`moto/${i + 1}.png`);
    vehicles.push(`van/${i + 1}.png`);
    vehicles.push(`car/${i + 1}.png`);
  }
  const reRender = (e) => {
    setTitle(e.target.value);
  };

    const context = useContext(Reservation);
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
    afterHcurrentDate.setHours(afterHcurrentDate.getHours() + 25);
    afterHcurrentDate = afterHcurrentDate.toISOString().slice(0, 16);


    useEffect(() => {
      context.rentDate[1](currentDate);
      context.returnDate[1](afterHcurrentDate);
      context.rentLocation[1]("Adrar");
      context.returnLocation[1]("Adrar");
      context.selectedVehicle[1](null);
      context.selectedParking[1](null);
      let totalHours =
        (new Date(afterHcurrentDate) - new Date(currentDate)) / 36e5;
      context.nbHours[1](Math.round(totalHours % 24));
      context.nbDays[1](Math.round(totalHours / 24));
      context.total[1](0);
      context.tools[1]("");
      context.driver[1]("");
      context.renter[1]("");
      context.paymentMethod[1]("On Ligne");
      context.signatureD[1](null);
      context.signatureR[1](null);
      context.stateR[1](null);
      context.cardNum[1]("");
      context.cardDate[1]("");
      context.cardName[1]("");
      context.promotion[1](0);
      context.bill[1](null);
      context.contract[1](null);
    }, []);

  return (
    <Main title={"Rentals"}>
      <div className="d-flex justify-content-between flex-column flex-sm-row p-lg-3">
        <h4>Filter using contarct state</h4>
        <Form.Select onChange={reRender} className="w-50 fs-6">
          <option value="Request for acceptance of the signature">
            Request for acceptance of the signature
          </option>
          <option value="Request for acceptance of the rental">
            Request for acceptance of the rental
          </option>
          <option value="Signed contract with signature and QR code">
            Signed contract with signature and QR code
          </option>
        </Form.Select>
      </div>
      <h1> {title}</h1>
      <div className="p-3 d-flex flex-wrap justify-content-center">
        {vehicles.map((v, i) => (
          <Link
            to={`/${user}/${user}/Rentals/MyContract`}
            key={i}
            className="contract-card w-100 p-3 m-1 d-flex flex-sm-row flex-column"
          >
            <div className="img-containe rent-vehicle d-flex m-auto justify-content-center align-items-center">
              <img
                value="Request for acceptance of the signature"
                className=" p-2"
                src={require(`../img/vehicles/${v}`)}
                alt="accent2016"
              />
            </div>
            <ul className="list-unstyled w-100 my-1 rent-info flex-column ">
              <li className="d-flex flex-wrap ">
                <p className="m-0">
                  <b>
                    <span className="px-1 fs-5">Constantine</span>
                  </b>
                  <b>
                    <i className="bi bi-arrow-right px-1 fs-3"></i>
                  </b>
                  <b>
                    <span className="px-1 fs-5">Touggourt</span>
                  </b>
                </p>
              </li>
              <li className="d-flex flex-wrap ">
                <p className="m-0">
                  <b>
                    <span className="px-1 fs-5">17-05-2022</span>{" "}
                  </b>
                  <b>
                    <i className="bi bi-arrow-right px-1 fs-3"></i>
                  </b>
                  <b>
                    <span className="px-1 fs-5">20-05-2022</span>
                  </b>
                </p>
              </li>
              <li className="d-flex flex-wrap ">
                <p className="my-1 mx-2">
                  <b>Driver:</b> <span className="p-1">BENABDESSADOK Safa</span>
                </p>
                <p className="my-1 mx-2">
                  <b>Driver ID:</b> <span className="p-1"> 1234567890</span>
                </p>
              </li>
              <li className="d-flex flex-wrap ">
                <p className=" my-1 mx-2">
                  <b>Vehicle:</b> <span className="p-1">Audi A3</span>
                </p>
                <p className=" my-1 mx-2">
                  <b>Registration Number:</b>
                  <span className="p-1">123456 214 25</span>
                </p>
              </li>
              <li className="d-flex flex-wrap ">
                <p className=" my-1 mx-2">
                  <b>State:</b>{" "}
                  <span className="p-1">
                    Request for acceptance of the signature
                  </span>
                </p>
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </Main>
  );
};
