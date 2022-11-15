import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const HomePageIndex = (props) => {
  const [searchCity, setSearchCity] = useState({
    city: ""
  })

  const handleInputChange = (event) => {
    setSearchCity({
      ...searchCity,
      [event.currentTarget.city]: event.currentTarget.value
    })
  }

  if (searchCity.city !== "") {
    return <Redirect to={`/restaurants`} />
  }

  return (
    <form>
      <label>
        <input type="text" name="city" onChange={handleInputChange}></input>
      </label>
      <input type="submit" value="Search by City" />
    </form>
  )
}

export default HomePageIndex