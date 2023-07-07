import React from "react";
import {LOGO_URL} from "../utils/constants";

const navigationTabs = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/about" },
  { name: "Cart", link: "/cart" }
];
 const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          {navigationTabs.map(tab => (
            <li href={tab.link}>{tab.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
