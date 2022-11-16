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
    return <Redirect to={`/${searchCity}`}/>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="city" onChange={handleChange}/>
      </label>
      <input type="submit" value="Search by City" />
    </form>
  )
}

export default HomePageIndex