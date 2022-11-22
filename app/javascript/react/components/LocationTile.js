import React from "react";
import { Link } from "react-router-dom";

const LocationTile = (props) => {
  return (
    <div className="cell medium-6 small-12 large-4">
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
        </div>
      </Link>
    </div>
  );
};

export default LocationTile;
