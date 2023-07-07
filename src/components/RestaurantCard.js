import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data
    return (
      <div className="res-card">
        <img className = "res-logo"src = {CDN_URL + resData.data.cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo/100} FOR TWO</h4>
      </div>
    );
  };

  export default RestaurantCard;