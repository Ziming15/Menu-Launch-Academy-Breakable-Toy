import React, { useState, useEffect } from "react";
import RestaurantShow from "./RestaurantShow.js";
import FoodForm from "./FoodForm.js";
import MenuTile from "./MenuTile.js";

const RestaurantShowContainer = (props) => {
  const [restaurant, setRestaurant] = useState({
    photos: [],
  });
  const [newFood, setNewFood] = useState({
    name: "",
    image_url: "",
    flavor: "",
  });

  const [oldFood, setOldFood] = useState([]);

  const flavors = ["", "Spicy", "Sweet", "Salty", "Sour", "Savory", "Bitter"];

  const flavorsOptions = flavors.map((flavor) => {
    return (
      <option key={flavor} value={flavor}>
        {flavor}
      </option>
    );
  });

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setRestaurant(responseBody.results.business);
      setOldFood(responseBody.menu);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const photosArray = restaurant.photos.map((photo) => {
    return <img src={photo} key={photo} />;
  });

  const handleInputChange = (event) => {
    setNewFood({
      ...newFood,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmitNewFood = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}/foods`,
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newFood),
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const foodBody = await response.json();
      if (!foodBody.error) {
        console.log("Food was added successfully!");
        setOldFood([...oldFood, foodBody]);
        setNewFood({
          name: "",
          image_url: "",
          flavor: "",
        });
      } else if (
        foodBody.error[0] === "Only admins have access to this feature"
      ) {
        alert("Only admins have access to this feature");
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleDeleteFood = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}/foods/${oldFood[0].name}`,
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
        setOldFood(responseBody.foods);
      } else if (
        responseBody.error[0] === "Only admins have access to this feature"
      ) {
        alert("Only admins have access to this feature");
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const MenuTiles = oldFood.map((food) => {
    return (
      <MenuTile
        key={food.id}
        food={food}
        params={props.match.params}
        handleDeleteFood={handleDeleteFood}
        flavorsOptions={flavorsOptions}
        setOldFood={setOldFood}
      />
    );
  });

  return (
    <>
      <RestaurantShow
        photo={photosArray}
        name={restaurant.name}
        phone={restaurant.phone}
        price={restaurant.price}
        rating={restaurant.rating}
      />
      <h3>Menu Items</h3>
      {MenuTiles}
      <FoodForm
        newFood={newFood}
        handleSubmitNewFood={handleSubmitNewFood}
        handleInputChange={handleInputChange}
        flavorsOptions={flavorsOptions}
      />
    </>
  );
};

export default RestaurantShowContainer;
