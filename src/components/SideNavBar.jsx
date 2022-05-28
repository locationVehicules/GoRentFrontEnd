import React from "react";
import { Logo } from "./Logo";
import { Navitem } from "./navitem";
import "../css/global.css";

export const SideNavBar = ({ userType, userApp}) => {
  const defineUser = () => {
    let userNavItems = [];
    switch (userType) {
      case "renterP":
        userNavItems = [
          false, // 0
          false, // 1
          false, // 2
          false, // 3
          false, // 4
          false, // 5
          false, // 6
          false, // 7
          false, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      case "renterE":
        userNavItems = [
          false, // 0
          false, // 1
          false, // 2
          false, // 3
          false, // 4
          false, // 5
          false, // 6
          false, // 7
          false, // 8
          true, // 9
          true, // 10
          true, // 11
          true, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      case "GarageManager":
        userNavItems = [
          false, // 0
          false, // 1
          false, // 2
          false, // 3
          false, // 4
          false, // 5
          false, // 6
          false, // 7
          true, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      case "admin":
        userNavItems = [
          false, // 0
          true, // 1
          true, // 2
          false, // 3
          true, // 4
          false, // 5
          false, // 6
          false, // 7
          false, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      case "owner":
        userNavItems = [
          false, // 0
          false, // 1
          false, // 2
          true, // 3
          false, // 4
          true, // 5
          true, // 6
          true, // 7
          false, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      case "secretariat":
        userNavItems = [
          true, // 0
          true, // 1
          true, // 2
          true, // 3
          false, // 4
          false, // 5
          false, // 6
          false, // 7
          false, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
      default:
        userNavItems = [
          false, // 0
          false, // 1
          false, // 2
          false, // 3
          false, // 4
          false, // 5
          false, // 6
          false, // 7
          false, // 8
          true, // 9
          true, // 10
          false, // 11
          false, // 12
          true, // 13
          true, // 14
          true, // 15
        ];
        break;
    }
    return userNavItems;
  };

  return (
    <nav
      className="mainNav navbar navbar-expand-lg col-lg-2 side-navbar fixed-top"
      id="sidebar"
    >
      <div className="container flex-lg-column mb-auto ">
        <Logo/>
        <div className="collapse navbar-collapse " id="side-navbar">
          <ul className="navbar-nav flex-column mb-auto mt-2 mb-lg-0 navbar-nav-side">
            <Navitem userNavItems={defineUser()} userApp={userApp} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
