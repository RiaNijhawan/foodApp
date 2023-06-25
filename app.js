import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * components in my app
 * header which has 2 partitions - left with logo & right with navbar with home, about, cart
 * body
 * search input with search button
 * cards with restaurant info (card/restaurant container) - restaurant card
 * footer with links and copyright, address, contact, faq
 *
 */
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

