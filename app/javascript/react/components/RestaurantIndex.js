import React, { useEffect, useState } from "react"
import RestaurantTile from "./RestaurantTile.js"

const RestaurantIndex = (props) => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    try {
      const response = await fetch(`/api/v1/restaurants/${props.match.params.city}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()

      setRestaurants(responseBody.businesses)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getRestaurants()
  }, [])
  const restaurantTiles = restaurants.map(restaurant => {
    return (
     <RestaurantTile
      key={restaurant.id}
      restaurant={restaurant}
     />

    )
  })
  return (
    <div className='ride-index'>
    <div className="grid-x">
      <div className= "small-12 medium-6 large-8 park-section">
        <h1 className="park-and-ride-title">All Restaurants</h1>
      </div>
    <div className='grid-x grid-margin-x'>
    {restaurantTiles}

    </div>
    </div>
    </div>
  )
}

export default RestaurantIndex