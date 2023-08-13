import React from "react";
import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";

const navigationTabs = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/about" },
  { name: "Cart", link: "/cart" }
];
 const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  useEffect(() =>{
   console.log("useEffect is called");
  },[btnName]); 

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
             <button className="login" onClick={()=> { return (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
