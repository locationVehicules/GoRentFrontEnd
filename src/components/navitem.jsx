import React from "react";
import { NavLink } from "react-router-dom";

export const Navitem = ({ userNavItems, userApp }) => {
  const navitems = [
    {
      href: `${userApp}/Rentals-management`,
      i_class: "bi bi-receipt-cutoff fs-4",
      span_text: "Rentals management",
    },
    {
      href: `${userApp}/User-management`,
      i_class: "bi bi-people fs-4",
      span_text: "User management",
    },
    {
      href: `${userApp}/Vehicles-management`,
      i_class: "bi bi-truck fs-4",
      span_text: "Vehicles management",
    },
    {
      href: `${userApp}/Black-list`,
      i_class: "bi bi-person-x fs-4",
      span_text: "Black list",
    },
    {
      href: `${userApp}/Questions-management`,
      i_class: "bi bi-question-square fs-4",
      span_text: "Questions management",
    },
    {
      href: `${userApp}/Reclamation-management`,
      i_class: "bi bi-question-square fs-4",
      span_text: "Reclamation management",
    },
    {
      href: `${userApp}/Change-prices`,
      i_class: "bi bi-currency-exchange fs-4",
      span_text: "Change prices",
    },
    {
      href: `${userApp}/Status`,
      i_class: "bi bi-command fs-4",
      span_text: "Status",
    },
    {
      href: `${userApp}/Parking-management`,
      i_class: "bi bi-file-ppt fs-4",
      span_text: "Parking management",
    },
    {
      href: `${userApp}/Rent`,
      i_class: "bi bi-bicycle fs-4",
      span_text: "Rent",
    },
    {
      href: `${userApp}/Rentals`,
      i_class: "bi bi-receipt fs-4",
      span_text: "Rentals",
    },
    {
      href: `${userApp}/Identify-driver`,
      i_class: "bi bi-person-plus fs-4",
      span_text: "Identify driver",
    },
    {
      href: `${userApp}/Drivers-list`,
      i_class: "bi bi-people fs-4",
      span_text: "Drivers list",
    },
    {
      href: `${userApp}/Contact-administrator`,
      i_class: "bi bi-envelope fs-4",
      span_text: "Contact administrator",
    },
    {
      href: `${userApp}/Settings`,
      i_class: "bi bi-gear fs-4",
      span_text: "Settings",
    },
    {
      href: "/",
      i_class: "bi bi-box-arrow-right fs-4",
      span_text: "Logout",
    },
  ];

  let list = [];
  userNavItems.map((i, index) => i && list.push(navitems[index]));
  return list.map((navitem, index) => (
    <NavLink to={navitem.href} className="nav-link" key={index}>
      <li className="nav-item px-lg-0 px-2 my-0 fs-6 d-flex align-items-center">
        <i className={navitem.i_class}></i>
        <span className="item position-relative mx-2">{navitem.span_text}</span>
      </li>
    </NavLink>
  ));
};
