import React from "react";
import { Link } from "react-router-dom";

const MenuTile = (props) => {
  return (
    <Link to={`${props.params.restaurant}/${props.food.name}`}>
      <p>{props.food.name}</p>
      <img src={props.food.image_url}/>
      <p>{props.food.flavor}</p>
    </Link>
  );
};

export default MenuTile;
