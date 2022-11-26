import React, { useState } from "react";

const ReviewTile = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const displayEditReview = () => {
    setDisplayForm(!displayForm);
  };

  const [editedReview, setEditedReview] = useState({
    title: props.review.title,
    body: props.review.body,
    rating: props.review.rating,
  });

  const handleDeleteReview = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.params.location}/restaurant/${props.params.restaurant}/foods/${props.params.food}/reviews/${props.review.title}`,
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
        props.setOldReviews(responseBody.reviews);
      } else if (responseBody.error[0] === "You need to be signed in first") {
        alert("You need to be signed in first");
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  let memberEdit;
  let memberDelete;
  if (props.currentUser) {
    memberEdit = <button onClick={displayEditReview}>Edit Dish</button>;
    memberDelete = <button onClick={handleDeleteReview}>Delete Dish</button>;
  }

  const handleEditReview = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/v1/location/${props.params.location}/restaurant/${props.params.restaurant}/foods/${props.params.food}/reviews/${props.review.title}`,
        {
          method: "PATCH",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(editedReview),
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      if (!responseBody.error) {
        console.log("Review was changed successfully!");
        props.setOldReviews(responseBody);
        // window.location.reload();
        setDisplayForm(false);
      } else if (responseBody.error[0] === "You need to be signed in first") {
        alert("You need to be signed in first");
        setDisplayForm(false);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleInputChange = (event) => {
    setEditedReview({
      ...editedReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  let editForm;

  if (displayForm === true) {
    editForm = (
      <>
        <h1>Edit Review</h1>
        <form onSubmit={handleEditReview}>
          <label>
            Review Title:
            <input
              type="text"
              name="title"
              value={editedReview.title}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Review Body:
            <input
              type="text"
              name="body"
              value={editedReview.body}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Review Rating:
            <fieldset className="rating">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
               onChange={handleInputChange}
              />
              <label htmlFor="star5"></label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
               onChange={handleInputChange}
              />
              <label htmlFor="star4"></label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
               onChange={handleInputChange}
              />
              <label htmlFor="star3"></label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
               onChange={handleInputChange}
              />
              <label htmlFor="star2"></label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
               onChange={handleInputChange}
              />
              <label htmlFor="star1"></label>
            </fieldset>
          </label>
          <input type="submit" value="Edit Review" />
        </form>
      </>
    );
  }

  return (
    <>
      {memberDelete}
      {memberEdit}
      <p>{props.review.title}</p>
      <p>{props.review.body}</p>
      <p>{props.review.rating}</p>
      {editForm}
    </>
  );
};

export default ReviewTile;
