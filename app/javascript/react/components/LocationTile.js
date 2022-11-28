import React from "react";
import { Link } from "react-router-dom";

const LocationTile = (props) => {
  let closed
  if (props.restaurant.is_closed) {
    closed = "Closed"
  } else {
    closed = "Open"
  }
  return (
      <Link to={`${props.params}/${props.restaurant.id}`}>
        <div className="image-box">
          <img
            src={props.restaurant.image_url}
            className="image-title-index zoom"
          />
          Name: {props.restaurant.name}
          <br />
          Rating: {props.restaurant.rating}
          <br />
          Price: {props.restaurant.price}
          <br />
          Closed?: {closed}
          <br />
          Rating: {props.restaurant.rating}
        </div>
      </Link>
  );
};

export default LocationTile;
