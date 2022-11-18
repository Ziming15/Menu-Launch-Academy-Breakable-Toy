import React, { useState, useEffect } from "react";
import RestaurantShow from "./RestaurantShow.js";

const RestaurantShowContainer = (props) => {
  const [restaurant, setRestaurant] = useState({
    photos: [],
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
  
  return (
    <RestaurantShow
      photo={photosArray}
      name={restaurant.name}
      phone={restaurant.phone}
      price={restaurant.price}
      rating={restaurant.rating}
    />
  );
};

export default RestaurantShowContainer;
