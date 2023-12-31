import {CDN_URL} from "../utils/constants";
import React from "react";

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info
    return (
      <div className="res-card">
        <img className = "res-logo"src = {CDN_URL + resData.info.cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCard;


  