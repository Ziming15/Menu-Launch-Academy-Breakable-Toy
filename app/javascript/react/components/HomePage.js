import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const HomePageIndex = (props) => {
  const [searchCity, setSearchCity] = useState("")
  const [redirect, SetRedirect] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()
    setSearchCity(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    SetRedirect(!redirect)
  }

  if (redirect) {
    return <Redirect to={`/restaurants/${searchCity}`}/>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="city" onChange={handleChange} placeholder="Address, neighborhood, city, state, or zip"/>
      </label>
      <input type="submit" value="Search" />
    </form>
  )
}

export default HomePageIndex