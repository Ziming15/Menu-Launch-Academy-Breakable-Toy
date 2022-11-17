import React, { useEffect, useState } from "react";
import RestaurantTile from "./RestaurantTile.js";

const RestaurantIndex = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `/api/v1/restaurants/${props.match.params.city}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();

      setRestaurants(responseBody.businesses);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const restaurantTiles = restaurants.map((restaurant) => {
    return (
      <RestaurantTile
        key={restaurant.id}
        restaurant={restaurant}
        params={props.match.params.city}
      />
    );
  });
  return (
    <div className="ride-index">
      <h1>All Restaurants</h1>
      <div className="grid-x">
        <div className="cell">{restaurantTiles}</div>
      </div>
    </div>
  );
};

export default RestaurantIndex;
