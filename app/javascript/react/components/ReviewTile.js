import React, { useState } from "react";
import ConvertRatingToStar from "./ConvertRatingToStar";

const ReviewTile = (props) => {
  let selected = props.review.rating;
  const [displayForm, setDisplayForm] = useState(false);
  const displayEditReview = () => {
    setDisplayForm(!displayForm);
  };

  const [editedReview, setEditedReview] = useState({
    title: props.review.title,
    body: props.review.body,
    rating: props.review.rating,
  });
  // let selected = props.
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
        <div className="edit-review-form">
          <h4>Edit Review</h4>

          <form onSubmit={handleEditReview}>
            <div className="edit-review-text">
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
            </div>
            <div className="update-rating">
              <label>
                Review Rating:
                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    onChange={handleInputChange}
                    defaultChecked={selected === 5}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    onChange={handleInputChange}
                    defaultChecked={selected === 4}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                    onChange={handleInputChange}
                    defaultChecked={selected === 3}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                    onChange={handleInputChange}
                    defaultChecked={selected === 2}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                    onChange={handleInputChange}
                    defaultChecked={selected === 1}
                  />
                  <label htmlFor="star1"></label>
                </fieldset>
              </label>
              <input type="submit" value="Edit Review" />
            </div>
          </form>
        </div>
      </>
    );
  }

  if (props.currentUser) {
    if (props.currentUser.id === props.review.user_id) {
      memberEdit = <button onClick={displayEditReview}>Edit Review</button>;
      memberDelete = (
        <button onClick={handleDeleteReview}>Delete Review</button>
      );
    }
  }

  return (
    <>
      <div className="review-text">
        <p> Username: {props.review.username}</p>
        <p>{props.review.title}</p>
        <p>
          {props.review.body} <br />{" "}
          {ConvertRatingToStar.convert(props.review.rating)}{" "}
        </p>
        {memberDelete}
        {memberEdit}
        {editForm}
      </div>
    </>
  );
};

export default ReviewTile;
