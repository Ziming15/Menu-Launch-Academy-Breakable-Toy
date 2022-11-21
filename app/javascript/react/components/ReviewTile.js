import React from "react"

const ReviewTile = (props) => {
  return (
    <>
     <p>{props.review.title}</p>
     <p>{props.review.body}</p>
     <p>{props.review.rating}</p>
    </>
  )
}

export default ReviewTile