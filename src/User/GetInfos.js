import React, { Component } from "react";
import Select from "react-select";
import { Reservation } from "../GetSetData/Contexts";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import "../css/getInfos.css";

import { loadStripe } from "@stripe/stripe-js";
const promise = loadStripe(
  "pk_test_51L4GmXH0mDiv5izs9R5HetS6n358XhnEuD82g3yMlCyUVC73YdOOqZkxzG3jzPEaXC4doZQwiIAb4sKZHNp2T9wY00o3iQQmQJ"
);

export class DriverInfos extends Component {
  constructor(props) {
    super(props);
    this.enterprise = this.props.enterprise;
  }
  driverList = [
    { value: "1", label: "BENABDESSADOK Safa" },
    { value: "2", label: "DAOUDI Souheib" },
    { value: "3", label: "MANSOURI Kaouther" },
    { value: "4", label: "BENABDESSADOK Safa" },
    { value: "5", label: "DAOUDI Souheib" },
    { value: "6", label: "MANSOURI Kaouther" },
    { value: "7", label: "BENABDESSADOK Safa" },
    { value: "8", label: "DAOUDI Souheib" },
    { value: "9", label: "MANSOURI Kaouther" },
  ];

  state = {
    driver: true,
  };
  displayDriverInput = () => {
    this.state.driver
      ? this.setState({
          driver: false,
        })
      : this.setState({
          driver: true,
        });
  };
  render() {
    return (
      <div className="container">
        <h3>Driver informations</h3>
        <form
          className="needs-validation d-flex flex-md-row flex-column"
          noValidate
        >
          <div className="m-2 w-100">
            <label htmlFor="id">Driver ID</label>
            {!this.enterprise ? (
              <>
                {this.state.driver && (
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="Driver ID"
                    required
                  />
                )}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={this.displayDriverInput}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I'm the driver
                  </label>
                </div>
              </>
            ) : (
              <Select
                className="select-driver"
                classNamePrefix="select"
                defaultValue={this.driverList[0]}
                name="select-driver"
                options={this.driverList}
              />
            )}
          </div>
        </form>
        <hr className="mb-4" />
      </div>
    );
  }
}

export class PaimentInfos extends Component {
  constructor(props) {
    super(props);
    this.path = this.props.path;
  }
  state = {
    onSpot: false,
  };
  payOnSpot = () => {
    this.state.onSpot
      ? this.setState({
          onSpot: false,
        })
      : this.setState({
          onSpot: true,
        });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="order-md-1">
            <h3 className="mb-3">Paiment informations</h3>
            <p id="alert">
              if you dont want to pay this reservation on spot ,please inform us
              ! in check point bellow
            </p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div id="pay-spot" className="input-group-text">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onClick={this.payOnSpot}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      pay on spot
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {!this.state.onSpot && (
              <form className="needs-validation" id="payment-form">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="cc-name">Card name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="cc-number">Card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="cc-number">Expires on</label>
                    <input
                      type="date"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <label htmlFor={"card-element"}>
                  Confirm card informations
                </label>
                <Elements stripe={promise}>
                  <CardElement
                    id="card-element"
                    className="form-control"
                    options={{
                      style: {
                        base: {
                          iconColor: "#000",
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontSmoothing: "antialiased",
                          ":-webkit-autofill": {
                            color: "#000",
                          },
                          "::placeholder": {
                            color: "#000",
                          },
                        },
                        invalid: {
                          iconColor: "#ff4c4c",
                          color: "#ff4c4c",
                        },
                      },
                    }}
                    onChange={() => this.handleChange}
                  />
                </Elements>
                {this.state.error && (
                  <div className="card-error" role="alert">
                    {this.state.error}
                  </div>
                )}
              </form>
            )}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="promo-code">Promotion code</label>
                <input
                  type="text"
                  className="form-control"
                  id="promo-code"
                  placeholder=""
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="new-total">New Total</label>
                <input
                  type="text"
                  className="form-control"
                  id="new-total"
                  value={`${this.context.total[0]} DZD `}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PaimentInfos.contextType = Reservation;
