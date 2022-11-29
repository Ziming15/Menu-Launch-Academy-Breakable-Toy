import React from "react";
import { Link } from "react-router-dom";

const LocationTile = (props) => {
  let closed;
  if (props.restaurant.is_closed) {
    closed = "Closed";
  } else {
    closed = "Open";
  }
  return (
    <Link to={`${props.params}/${props.restaurant.id}`}>
      <div className="image-box zoom">
        <img src={props.restaurant.image_url} className="image-title-index" />
        <div className="location-title-info">
          <h4>{props.restaurant.name}</h4>
          <br />
          <p>Rating: {props.restaurant.rating}</p>
          <br />
          <p>Price: {props.restaurant.price}</p>
          <br />
          <p> Closed?: {closed}</p>
        </div>
      </div>
    </Link>
  );
};

export default LocationTile;
