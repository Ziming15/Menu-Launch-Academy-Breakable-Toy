import React from "react";

const ReviewForm = (props) => {
  return (
    <>
      <h1>Add New Review</h1>
      <form onSubmit={props.handleSubmitNewFood}>
        <label>
          Review Title:
          <input
            type="text"
            name="title"
            onChange={props.handleInputChange}
            value={props.newReview.title}
          />
        </label>

        <label>
          Review Body:
          <input
            type="text"
            name="body"
            onChange={props.handleInputChange}
            value={props.newReview.body}
          />
        </label>

        <label>
        <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" ></label>
    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" ></label>
    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" ></label>
    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" ></label>
    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" ></label>
   
</fieldset>
        </label>

        <input type="submit" value="Add Food" />
      </form>
    </>
  )
}

export default ReviewForm;
