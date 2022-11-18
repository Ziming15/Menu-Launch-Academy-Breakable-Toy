import React from "react";

const FoodForm = (props) => {
  return (
    <>
      <h1>Add New Food</h1>
      <form onSubmit={props.handleSubmitNewFood}>
        <label>
          Food Name:
          <input
            type="text"
            name="name"
            onChange={props.handleInputChange}
            value={props.newFood.name}
          />
        </label>

        <label>
          Image_url:
          <input
            type="text"
            name="image-url"
            onChange={props.handleInputChange}
            value={props.newFood.image_url}
          />
        </label>

        <label>
          Flavors:
          <select
            type="text"
            name="flavors"
            onChange={props.handleInputChange}
            value={props.newFood.flavors}
          >
            {props.flavorsOptions}
          </select>
        </label>

        <input type="submit" value="Add Food" />
      </form>
    </>
  );
};

export default FoodForm;