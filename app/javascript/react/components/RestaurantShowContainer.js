import React, { useState, useEffect } from "react";
import RestaurantShow from "./RestaurantShow.js";
import FoodForm from "./FoodForm.js";
import MenuTile from "./MenuTile.js";

const RestaurantShowContainer = (props) => {
  const [restaurant, setRestaurant] = useState({
    photos: [],
    categories: []
  });
  const [newFood, setNewFood] = useState({
    name: "",
    image_url: "",
    flavor: "",
  });

  const [oldFood, setOldFood] = useState([]);

  const [currentUser, setCurrentUser] = useState()

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
      setCurrentUser(responseBody.current_user.role)
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

  const MenuTiles = oldFood.map((food) => {
    return (
      <MenuTile
        key={food.id}
        food={food}
        params={props.match.params}
        flavorsOptions={flavorsOptions}
        setOldFood={setOldFood}
        currentUser={currentUser}
      />
    );
  });
const categories = restaurant.categories.map((category) => {
  return <p key={category}>{category.title}</p>
})

let closed
  if (restaurant.is_closed) {
    closed = "Closed"
  } else {
    closed = "Open"
  }

  return (
    <>
      <RestaurantShow
        photo={photosArray}
        name={restaurant.name}
        phone={restaurant.phone}
        price={restaurant.price}
        rating={restaurant.rating}
        categories={categories}
        closed={closed}
        address={restaurant.location}

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
