import React from "react";
/**
 * body
 * search
 * search button
 * restaurant container
 * restaurant card :
 * img
 * name of res, star rating, cuisines, eta
 * onChange={handleChange}
          value={searchInput}
 */
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src="https://static.toiimg.com/photo/95560619.cms"></img>
      <h3>Soul Cafe</h3>
      <h4>Italian Food, Pasta, Pizza</h4>
      <div className="card-rating">
        <h4> 4.4</h4>
        <h4>40 mins</h4>
        <h4>Rs 200 for two</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search here" />
        <button id="search">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};
export default Body;

