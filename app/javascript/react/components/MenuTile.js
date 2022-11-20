import React from "react";

const MenuTile = (props) => {
  return (
    <>
      <p>{props.food.name}</p>
      <p>{props.food.image_url}</p>
      <p>{props.food.flavor}</p>
    </>
  );
};

export default MenuTile;
