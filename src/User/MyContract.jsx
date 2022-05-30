import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Main } from "../components/Main";
import { Confirmation } from "../Owner/BlackList";
import { PaimentInfos } from "./GetInfos";

import SignaturePad from "react-signature-canvas";

import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const MyContract = ({user}) => {
  const contartPath = "GetSetData/1234567890_Contract.pdf";
  const billPath = "GetSetData/1234567890_Bill.pdf";

  const withQRcode = true;
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSucces = ({ numPages }) => {
    setNumPages(numPages);
  };
  const [displayCancel, setDisplayCancel] = useState(false);
  const [renew, setRenewl] = useState(false);
  const [displaySignPad, setDisplaySignPad] = useState(false);

  const displayConfirmation = () => {
    displayCancel ? setDisplayCancel(false) : setDisplayCancel(true);
  };
  const confirmation = (e) => {
    displayConfirmation();
  };

  const AddSign = () => {
    displaySignPad ? setDisplaySignPad(false) : setDisplaySignPad(true);
  };
  const displayRenew = () => {
    renew ? setRenewl(false) : setRenewl(true);
  };
  return (
    <Main title={"Rentals Management"}>
      <div className="container">
        <div className="d-flex d-flex align-items-center">
          <Link to={`/${user}/${user}/Rentals`}>
            <button
              type="button"
              className="btn d-flex justify-content-center align-items-center"
            >
              <i
                className="bi bi-arrow-left p-2 fs-3 d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "30px",
                  boxShadow: "0px 4px 18px rgba(221, 221, 221, 0.51)",
                  background: "var(--btn_color1)",
                  color: "white",
                }}
              ></i>
            </button>
          </Link>
          <h1>Contract</h1>{" "}
        </div>
        <Document
          className="d-flex flex-column align-items-center"
          file={require(`../${contartPath}`)}
          onLoadSuccess={onDocumentLoadSucces}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              className={"PDFPage mb-2"}
              key={`page_${index + 1}`}
              renderTextLayer={false}
              renderInteractiveForms={false}
              pageNumber={index + 1}
            />
          ))}
        </Document>
        {!withQRcode ? (
          <div className="d-flex justify-content-end flex-column flex-sm-row p-lg-3">
            <div className="d-flex flex-wrap">
              <button
                type="button"
                className="btn mx-lg-2 m-1 d-flex justify-content-center align-items-center"
                onClick={confirmation}
                style={{
                  width: "150px",
                  background: "var(--btn_color1)",
                  color: "white",
                }}
              >
                <i
                  className="bi bi-x-lg fs-4"
                  style={{
                    color: "white",
                  }}
                ></i>
                Cancel reservation
              </button>
              <button
                type="button"
                className="btn mx-lg-2 m-1 d-flex justify-content-center align-items-center"
                onClick={AddSign}
                style={{
                  width: "150px",
                  background: "var(--btn_color1)",
                  color: "white",
                }}
              >
                <i
                  className="bi bi-check2-circle fs-4"
                  style={{
                    color: "white",
                  }}
                ></i>
                Submit signature
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>Bill</h1>
            <Document
              className="d-flex flex-column align-items-center"
              file={require(`../${billPath}`)}
              onLoadSuccess={onDocumentLoadSucces}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  className={"PDFPage mb-2"}
                  key={`page_${index + 1}`}
                  renderTextLayer={false}
                  renderInteractiveForms={false}
                  pageNumber={index + 1}
                />
              ))}
            </Document>

            <div className="d-flex justify-content-end flex-column flex-sm-row p-lg-3">
              <div className="d-flex justify-content-end flex-column flex-sm-row p-lg-3">
                <div className="d-flex flex-wrap">
                  <button
                    type="button"
                    className="btn mx-lg-2 m-1 d-flex justify-content-center align-items-center"
                    onClick={displayRenew}
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 18px rgba(221, 221, 221, 0.51)",
                      background: "var(--btn_color1)",
                      color: "var(--nav_font_color)",
                    }}
                  >
                    <i
                      className="bi bi-arrow-repeat fs-4"
                      style={{
                        color: "white",
                      }}
                    ></i>
                    Renew reservation
                  </button>
                  <button
                    type="button"
                    className="btn mx-lg-2 m-1 d-flex justify-content-center align-items-center"
                    style={{
                      borderRadius: "30px",
                      boxShadow: "0px 4px 18px rgba(221, 221, 221, 0.51)",
                      background: "var(--btn_color1)",
                      color: "var(--nav_font_color)",
                    }}
                  >
                    <i
                      className="bi bi-printer fs-6"
                      style={{
                        color: "white",
                      }}
                    ></i>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {displaySignPad && <MySignaturePad AddSign={AddSign} />}
      {displayCancel && (
        <Confirmation
          displayConfirmation={displayConfirmation}
          confirmationText={"Are you sure ?"}
        />
      )}
      {renew && <RenewFrom displayRenew={displayRenew} />}
    </Main>
  );
};

const MySignaturePad = ({ AddSign }) => {
  let sigPad = useRef({});
  let sign = "";
  const clear = () => {
    sigPad.current.clear();
  };
  const submit = () => {
    sign = sigPad.current.toDataURL();
    console.log(sign);
    AddSign();
  };
  const cancel = () => {
    AddSign();
  };
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Submit Signature
            </h4>
          </div>
          <div className="modal-body">
            <div className="signature-container">
              <SignaturePad ref={sigPad} />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex w-100 justify-content-between">
              <button
                onClick={cancel}
                style={{
                  width: "100px",
                  color: "white",
                  border: "1px solid var(--bg_icon_color)",
                  background: "var(--btn_color1)",
                  borderRadius: "5px",
                }}
              >
                cancel
              </button>
              <button
                onClick={clear}
                style={{
                  width: "100px",
                  color: "white",
                  border: "1px solid var(--bg_icon_color)",
                  background: "var(--btn_color1)",
                  borderRadius: "5px",
                }}
              >
                clear
              </button>
              <button
                onClick={submit}
                style={{
                  width: "100px",
                  color: "white",
                  border: "1px solid var(--bg_icon_color)",
                  background: "var(--btn_color1)",
                  borderRadius: "5px",
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenewFrom = ({ displayRenew }) => {
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Renew form
            </h4>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-wrap">
              <div className="form-group m-2 col">
                <label htmlFor="exampleInputDate1">
                  <i className="bi bi-calendar-check"></i>New return date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleInputDate1"
                  required
                />
              </div>
            </div>
            <PaimentInfos />

            <p className="px-3 fs-4">
              {" "}
              <b>Total:</b>
              <span> 3000 DZD</span>
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={displayRenew}
              style={{
                height: "40px",
                width: "120px",
                color: "white",
                border: "1px solid var(--bg_icon_color)",
                background: "var(--btn_color1)",
                borderRadius: "10px",
              }}
            >
              cancel
            </button>

            <button
              onClick={displayRenew}
              style={{
                height: "40px",
                width: "120px",
                color: "white",
                border: "1px solid var(--bg_icon_color)",
                background: "var(--btn_color1)",
                borderRadius: "10px",
              }}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
