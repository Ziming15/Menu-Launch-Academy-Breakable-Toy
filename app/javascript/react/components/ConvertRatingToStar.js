import React from "react"

class ConvertRatingToStar {
  static convert(rating) {
    if (rating === 1.0 || rating === 1) {
      return (
        <div className="rating star-color">
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      )
    } else if (rating === 2.0 || rating === 2) {
      return (
        <div className="rating star-color">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      )
    } else if (rating === 3.0 || rating === 3) {
      return (
        <div className="rating star-color">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      )
    } else if (rating === 4.0 || rating === 4) {
      return (
        <div className="rating star-color">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      )
    } else if (rating === 5.0 || rating === 5) {
      return (
        <div className="rating star-color">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      )
    }
  }
}

export default ConvertRatingToStar