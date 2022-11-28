import React from "react";
import ImageSlider from "./ImageSlider"

const RestaurantShow = (props) => {
  let address;
  if (props.address) {
    address = props.address.display_address.toString();
  }
  return (
    <>
      <h1 className="restaurant-name">{props.name}</h1>
      <div className="containerStyles">
        <ImageSlider slides={props.photosArray}/>
      </div>
      Phone Number: <p>{props.phone}</p>
      Pricing: <p>{props.price}</p>
      Rating: <p>{props.rating}</p>
      Categories: <>{props.categories}</>
      Closed?: <p>{props.closed}</p>
      Address: <p>{address}</p>
    </>
  );
};

export default RestaurantShow;
