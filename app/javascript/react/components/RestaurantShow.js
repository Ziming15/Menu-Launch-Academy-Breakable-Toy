import React, { useState, useEffect } from "react";

const RestaurantShow = (props) => {
  const [restaurant, setRestaurant] = useState({
    photos: [],
  });

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `/api/v1/restaurants/${props.match.params.city}/restaurant/${props.match.params.restaurant}`
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
    <div>
      {photosArray}
      <h1>{restaurant.name}</h1>
      <p>{restaurant.phone}</p>
      <p>{restaurant.price}</p>
      <p>{restaurant.rating}</p>
      <p>{restaurant.is_closed}</p>
    </div>
  );
};

export default RestaurantShow;
