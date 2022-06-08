import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Main } from "../components/Main";
import { DriverInfos, PaimentInfos } from "./GetInfos";
import { MySignaturePad } from "./MyContract";
import { Reservation } from "../GetSetData/Contexts";
import AdministrationAPIs from "../GetSetData/useAPIs/AdministrationAPIs";

export const Payment = ({ user }) => {
  const context = useContext(Reservation);
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");
  const [displaySignPad, setDisplaySignPad] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const displayConfirmation = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const Confirm = () => {
    if (context.paymentMethod[0] === "On Spot") {
      setText("Pay location to cuntune reservation");
      displayConfirmation();
    } else {
      setText("Your reservation passed successfully!");
      AddSign();
    }
  };
  const AddSign = () => {
    console.log(context.bill[0], context.contract[0]);
    context.bill[0] && context.contract[0] && displayConfirmation();
    displaySignPad ? setDisplaySignPad(false) : setDisplaySignPad(true);
  };
  return (
    <Main title={"Rent"}>
      <DriverInfos enterprise={false} />
      <PaimentInfos path={`${user}/${user}`} />
      <hr className="mb-4" />
      <div className="btn d-flex justify-content-end align-items-center">
        <button
          className="btn"
          style={{
            borderRadius: "10px",
            height: 40,
            color: "white",
            background: "var(--pr1)",
          }}
          onClick={() => {
            Confirm();
          }}
        >
          Continue to checkout
        </button>
      </div>
      {displaySignPad && <MySignaturePad AddSign={AddSign} />}
      {display && <Confirmation user={user} text={text} />}
    </Main>
  );
};

export const Confirmation = ({ user, text }) => {
  const [onSpot, setOnSpot] = useState(false);
  const [agency, setAgency] = useState(false);
  useEffect(() => {
    if (text === "Pay location to cuntune reservation") {
      getAgency();
      setOnSpot(true);
      console.log(agency);
    }
    if (text === "Your reservation passed successfully!") {
      setOnSpot(false);
    }
  }, []);
  const context = useContext(Reservation);
  const getAgency = async () => {
    await AdministrationAPIs.AgencyDetail(context.rentLocation[0]).then(
      (data) => setAgency(data)
    );
  };
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-success">
              <i
                className="bi bi-check-circle m-3 d-flex justify-content-center text-success"
                style={{ fontSize: "55px" }}
              ></i>
              <p className=" d-flex justify-content-center fs-3">Success</p>
            </div>
            <p className="d-flex pt-2 px-3 justify-content-center fs-5">
              {text}
            </p>

            {agency && (
              <div className="row">
                <div className="col-md-6">
                  <h5>
                    <strong>Agency location</strong>
                  </h5>
                  <strong>Name</strong>
                  <p className="px-1">{agency.name}</p>
                  <strong>Adresse</strong>
                  <p className="px-1"> {agency.address}</p>
                </div>
                <div className="col-md-6">
                  <iframe
                    title={"location"}
                    src={`https://www.google.com/maps/${agency.localisation}`}
                    className="w-100 h-100 border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            {onSpot ? (
              <Link
                to={`/${user}/${user}/Rentals`}
                className="btn accept-btn fs-5"
                data-dismiss="modal"
                style={{ color: "black" }}
              >
                OK
              </Link>
            ) : (
              <Link
                to={`/${user}/${user}/Rentals/MyContract`}
                className="btn accept-btn fs-5"
                data-dismiss="modal"
                style={{ color: "black" }}
              >
                OK
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
