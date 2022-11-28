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
  const [currentUser, setCurrentUser] = useState({
    id: ""
  }
  );
  const [errors, setErrors] = useState({});

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
      setFood(responseBody.food);
      setOldReviews(responseBody.reviews);
      setCurrentUser(responseBody.current_user);
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

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "rating"];
    requiredFields.forEach((field) => {
      if (newReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });
    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const handleSubmitNewReview = async (event) => {
    event.preventDefault();
    if (validForSubmission()) {
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
          setNewReview({
            title: "",
            body: "",
            rating: "",
          });
        } else if (
          reviewBody.error[0] === "Only members have access to this feature"
        ) {
          alert("Only members have access to this feature");
        }
      } catch (error) {
        console.error(`Error in fetch: ${error.message}`);
      }
    }
  };
  const ReviewTiles = oldReviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        review={review}
        params={props.match.params}
        setOldReviews={setOldReviews}
        currentUser={currentUser}
      />
    );
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
        errors={errors}
      />
    </>
  );
};

export default FoodShowContainer;
