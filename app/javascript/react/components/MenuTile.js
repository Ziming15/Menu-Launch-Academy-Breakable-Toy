import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuTile = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const displayEditFood = () => {
    setDisplayForm(!displayForm);
  };

  const [editedFood, setEditedFood] = useState({
    name: props.food.name,
    image_url: props.food.image_url,
    flavor: props.food.flavor,
  })

  const handleDeleteFood = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.params.location}/restaurant/${props.params.restaurant}/foods/${props.food.name}`,
        {
          method: "DELETE",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: null,
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      if (!response.error) {
        // window.location.reload();
        console.log(responseBody.deletedMessage);
        props.setOldFood(responseBody.foods);
      } else if (
        responseBody.error[0] === "Only admins have access to this feature"
      ) {
        alert("Only admins have access to this feature");
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  let adminEdit
  let adminDelete
  if (props.currentUser === "admin"){
    adminEdit = <button onClick={displayEditFood}>Edit Dish</button>
    adminDelete = <button onClick={handleDeleteFood}>Delete Dish</button>
  }


  const handleEditFood = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.params.location}/restaurant/${props.params.restaurant}/foods/${props.food.name}`,
        {
          method: "PATCH",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(editedFood),
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      if (!responseBody.error) {
        console.log("Dish was changed successfully!")
        props.setOldFood(responseBody)
        // window.location.reload();
        setDisplayForm(false)
      } else if (
        responseBody.error[0] === "Only admins have access to this feature"
        ) {
        alert("Only admins have access to this feature");
        setDisplayForm(false)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleInputChange = (event) => {
    setEditedFood({
      ...editedFood,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  let editForm;

  if (displayForm === true) {
    editForm = (
      <>
        <h1>Edit Dish</h1>
        <form onSubmit={handleEditFood}>
          <label>
            Food Name:
            <input type="text" name="name" value={editedFood.name} onChange={handleInputChange}/>
          </label>

          <label>
            Image_url:
            <input type="text" name="image_url" value={editedFood.image_url} onChange={handleInputChange}/>
          </label>

          <label>
            Flavor:
            <select type="text" name="flavor" value={editedFood.flavor} onChange={handleInputChange}>
              {props.flavorsOptions}
            </select>
          </label>
          <input type="submit" value="Edit Food" />
        </form>
      </>
    );
  }

  return (
    <>
      {adminDelete}
      {adminEdit}
      <Link to={`${props.params.restaurant}/${props.food.name}`}>
        <p>{props.food.name}</p>
        <img src={props.food.image_url} />
        <p>{props.food.flavor}</p>
      </Link>
      {editForm}
    </>
  );
};

export default MenuTile;
