import React, { useEffect, useState } from "react";
import LocationTile from "./LocationTile.js";
import Pagination from "./Pagination.js";

const LocationShowContainer = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = restaurants.slice(firstPostIndex, lastPostIndex);
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
      // alert(`There are no results for: ${props.match.params.location}. Please go back to homepage!`)
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const LocationTiles = currentPosts.map((restaurant) => {
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
      <div className="location-index">
        {currentPosts.length !== 0 ? (
          <h1 className="yellow-tail">
            {restaurants.length} Restaurants in{" "}
            {props.match.params.location[0].toUpperCase() +
              props.match.params.location.slice(1).toLowerCase()}
          </h1>
        ) : null}
        <Pagination
          totalPosts={restaurants.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {LocationTiles}
        <div className="pagination-margin">
        <Pagination
          totalPosts={restaurants.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        </div>
      </div>
    </>
  );
};

export default LocationShowContainer;
