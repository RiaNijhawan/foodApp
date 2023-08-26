import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listofRes, setListOfRes] = useState([]); 
  const [searchText, setSearchText] = useState("");


  useEffect( () => {
  fetchData();
  } , []);

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4384489&lng=77.0407101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log(json);

    // optional chaining
    setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // conditional rendering
  return ( listofRes.length === 0) ?  <Shimmer /> : (
          <div className="body"> 
        <div className="filter">
        <div className="search">
          <input type = "text" className="search-box" value = {searchText} 
          onChange = {(e) => {
              setSearchText(e.target.value);
              
          }}/>
        
            <button className="search-btn" onClick={() => {
         // filter the restaurant cards and update the UI 
         // searchText     
        const filteredRes = listofRes.filter(
          (res) =>res?.info?.name.toLowerCase().includes(searchText)
          );
          setListOfRes(filteredRes);

        }}> Search
        </button>
        </div>

        <button
         className = "top-filter"
          onClick = {() => {
      const filterList = listofRes.filter( (res) => res.info.avgRating > 4.2);
            setListOfRes(filterList);
            }} 
             >
          Top Rated Restaurant
          </button>
          </div>
      <div className="res-container">
{
listofRes.map((restaurant) =>  (
   <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />))
}
       
      </div>
    </div>
  );
};
export default Body;

