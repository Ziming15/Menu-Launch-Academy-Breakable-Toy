import React, {useState, useEffect} from 'react'

const RestaurantShow = (props) => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    try {
      const response = await fetch(`/api/v1/restaurants/${props.match.params.city}/restaurant/${props.match.params.restaurant}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setRestaurants(responseBody.business)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getRestaurants()
  }, [])
  const photosArray = restaurants.photos.map(photo => {
    return (
      photo
      )
    })
  return (
    <div>
    {photosArray}
    <h1>{restaurants.name}</h1>
    <p>{restaurants.phone}</p>
    </div>
  )
}

export default RestaurantShow