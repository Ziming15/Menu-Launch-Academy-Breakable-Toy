import React from "react";

const RestaurantShow = (props) => {
  let address;
  if (props.address) {
    address = props.address.display_address.toString();
  }
  return (
    <>
      {props.photo}
      <br />
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
