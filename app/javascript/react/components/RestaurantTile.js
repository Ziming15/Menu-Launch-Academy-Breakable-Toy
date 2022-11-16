import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantTile = props => {
  return (
    <div className='ceel medium-6 small-12 large-4'>
      <Link to={`/restaurants/${props.params}/${props.restaurant.id}`}>
        <div className='image-box'> 
          <img src={props.restaurant.image_url} className="image-title-index zoom-on-hover"/>
          {props.restaurant.name}
          {props.restaurant.rating}
          {props.restaurant.price}
        </div>
      </Link>
    </div>
  )
}

export default RestaurantTile