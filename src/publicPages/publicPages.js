import React, { Component } from "react";
import {
  NavBar,
  FindVehicle,
  ServiceAndOffers,
  HowItWork,
  QuestionAndAnswer,
  Footer,
} from "./LandingPage";
import "../css/style.css";
import { ScrollTop } from "../components/ScrollTop";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    document.body.style.background = "var(--body-color1)";
  }
  render() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }

    return (
      <>
        <NavBar />
        <ScrollTop />
        <FindVehicle path={`SearchResultPage`} />
        <ServiceAndOffers />
        <HowItWork />
        <QuestionAndAnswer />
        <Footer />
      </>
    );
  }
}
