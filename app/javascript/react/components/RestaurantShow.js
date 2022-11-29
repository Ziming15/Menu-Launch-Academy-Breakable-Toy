import React from "react";
import ImageSlider from "./ImageSlider";

const RestaurantShow = (props) => {
  let address;
  if (props.address) {
    address = props.address.display_address.toString();
  }

  const categoryArray = props.categories.map((category) => {
    return category.title
  })
  return (
    <>
      <h1 className="restaurant-name">{props.name}</h1>
      <div className="containerStyles">
        <ImageSlider slides={props.photosArray} />
      </div>
        <div className="restaurant-text">
          <p>Address: {address}</p>
          <p>Rating: {props.rating}</p>
          <p>Pricing: {props.price}</p>
          <p>Categories: {categoryArray}</p>
          <p>Phone Number: {props.phone}</p>
          <p>Closed?: {props.closed}</p>
        </div>
    </>
  );
};

export default RestaurantShow;
