import React, { useState, useEffect } from "react";
import RestaurantShow from "./RestaurantShow.js";
import FoodForm from "./FoodForm.js";

const RestaurantShowContainer = (props) => {
  const [restaurant, setRestaurant] = useState({
    photos: [],
  });

  const [newFood, setNewFood] = useState({
    name: "",
    image_url: "",
    flavors: ""
  })

  const flavors = ["", "Spicy", "Sweet", "Salty", "Sour", "Savory", "Bitter"]

  const flavorsOptions = flavors.map(flavor => {
    return (
      <option key={flavor} value={flavor}>
        {flavor}
      </option>
    )
  })

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
      setRestaurant(responseBody.business);
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
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const handleSubmitNewFood = async (event) => {
    event.preventDefault()
    try {
      response = await fetch(`/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ food: newFood})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const foodBody = await response.json()
      debugger
      if (foodBody.food) {
        console.log("Food was added successfully!")
      } else if (foodBody.error[0] === "Only admins have access to this feature") {
        alert("Only admins have access to this feature")
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  return (
    <>
    <RestaurantShow
      photo={photosArray}
      name={restaurant.name}
      phone={restaurant.phone}
      price={restaurant.price}
      rating={restaurant.rating}
    />
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
