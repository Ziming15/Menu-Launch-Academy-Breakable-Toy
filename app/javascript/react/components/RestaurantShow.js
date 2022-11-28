import React from "react";
import ImageSlider from "./ImageSlider"

const RestaurantShow = (props) => {
  let address;
  if (props.address) {
    address = props.address.display_address.toString();
  }
  const containerStyles = {
    width: `500px`,
    height: `280px`,
    margin: `0 auto`,
  }
  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={props.photosArray}/>
      </div>
      Name: <p>{props.name}</p>
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
