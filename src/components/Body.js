import React, { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  let [listofRes, setListOfRes] = useState(resList) 

  return (
    <div className="body">
        <div className="filter">
        <button
         className = "top-filter"
          onClick = {() => {
      const filterList = listofRes.filter(
      (res) => res.data.avgRating > 4.2);
            setListOfRes(filterList)
            }} 
             >
          Top Rated Restaurant
          </button>
          </div>
      <div className="res-container">
{
   listofRes.map((restaurant) =>  (
   <RestaurantCard key = {restaurant.data.id} resData = {restaurant} />))
}
       
      </div>
    </div>
  );
};
export default Body;

