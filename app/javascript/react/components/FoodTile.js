import React from "react";

const FoodTile = (props) => {
  return (
    <>
      <div className="menu-text">
        <div className="food-text">
          <h4> {props.food.name}</h4>
          <img src={props.food.image_url} />
          <p>{props.flavor}</p>
        </div>
      </div>
    </>
  );
};

export default FoodTile;
