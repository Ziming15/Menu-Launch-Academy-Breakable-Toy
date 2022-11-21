import React from "react"

const FoodTile = (props) => {
  return (
    <>
      <p> {props.food.name}</p>
      <img src={props.food.image_url}/>
      <p>{props.flavor}</p>
    </>
  )
}

export default FoodTile