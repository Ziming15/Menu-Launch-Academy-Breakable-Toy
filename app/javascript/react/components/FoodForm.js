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
          Image_url (optional):
          <input
            type="text"
            name="image_url"
            onChange={props.handleInputChange}
            value={props.newFood.image_url}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={props.handleInputChange}
            value={props.newFood.description}
          />
        </label>

        <label>
          Flavor:
          <select
            type="text"
            name="flavor"
            onChange={props.handleInputChange}
            value={props.newFood.flavor}
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
