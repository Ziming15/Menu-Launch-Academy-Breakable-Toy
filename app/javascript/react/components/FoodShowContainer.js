import React, { useState, useEffect } from "react";
import FoodTile from "./FoodTile.js";
import ReviewForm from "./ReviewForm.js";
import ReviewTile from "./ReviewTile.js";

const FoodShowContainer = (props) => {
  const [food, setFood] = useState([]);
  const [oldReviews, setOldReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: "",
    body: "",
    rating: "",
  });

  const getFood = async () => {
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}/foods/${props.match.params.food}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();

      setFood(responseBody.food[0]);
      setOldReviews(responseBody.reviews);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleInputChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmitNewReview = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.match.params.location}/restaurant/${props.match.params.restaurant}/foods//${props.match.params.food}/reviews`,
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newReview),
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const reviewBody = await response.json();
      if (!reviewBody.error) {
        console.log("Review was added successfully!");
        setOldReviews([...oldReviews, reviewBody]);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const ReviewTiles = oldReviews.map((review) => {
    return <ReviewTile key={review.id} review={review} />;
  });

  return (
    <>
      <FoodTile food={food} />
      <h3>{food.name} Reviews</h3>
      {ReviewTiles}
      <ReviewForm
        newReview={newReview}
        handleSubmitNewReview={handleSubmitNewReview}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default FoodShowContainer;
