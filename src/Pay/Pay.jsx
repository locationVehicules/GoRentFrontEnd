import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
} from "@stripe/react-stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid recreating the Stripe object on every render.
// Specicy Stripe Publishable API key here
const promise = loadStripe("stripe_publish_api_key");
// Initialize Stripe Elements
export const Pay = () => {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = async (event) => {
    console.log(document.querySelector("#card-element iframe"));
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    await fetch(
      "http://127.0.0.1:8000/payment/Pay/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aumount: 2000,
          currency: "usd",
          paymentMethodTypes: "card",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="m-auto mt-5 w-50 border p-4"
    >
      <label htmlFor={"card-element"}>Card</label>
      <CardElement
        id="card-element"
        options={{
          style: {
            base: {
              iconColor: "#000",
              color: "#000",
              fontWeight: "500",
              fontSize: "16px",
              fontSmoothing: "antialiased",
              ":-webkit-autofill": {
                color: "#fce883",
              },
              "::placeholder": {
                color: "#87BBFD",
              },
            },
            invalid: {
              iconColor: "#FFC7EE",
              color: "#FFC7EE",
            },
          },
        }}
        onChange={handleChange}
      /> 
  
      <button id="submit">
        <span id="button-text">
          {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded!
      </p>
    </form>
  );
};
