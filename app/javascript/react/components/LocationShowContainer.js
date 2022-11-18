import React, { useEffect, useState } from "react";
import LocationTile from "./LocationTile.js";

const LocationShowContainer = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();

      setRestaurants(responseBody.businesses);
    } catch (error) {
      alert(`There are no results for: ${props.match.params.location}. Please go back to homepage!`)
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const LocationTiles = restaurants.map((restaurant) => {
    return (
      <LocationTile
        key={restaurant.id}
        restaurant={restaurant}
        params={props.match.params.location}
      />
    );
  });
  return (
    <>
    <div className="ride-index">
      <h1>All Restaurants</h1>
      <div className="grid-x">
        <div className="cell">{LocationTiles}</div>
      </div>
    </div>
    </>
  );
};

export default LocationShowContainer;
