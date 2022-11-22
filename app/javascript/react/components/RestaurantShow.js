import React from "react";

const RestaurantShow = (props) => {
  return (
    <>
      {props.photo}
      <br />
      Name: <p>{props.name}</p>
      Phone Number: <p>{props.phone}</p>
      Pricing: <p>{props.price}</p>
      Rating: <p>{props.rating}</p>
    </>
  );
};

export default RestaurantShow;
