import React from "react";
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
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
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
