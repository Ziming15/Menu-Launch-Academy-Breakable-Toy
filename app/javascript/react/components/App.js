import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePageIndex from './HomePage.js'
import RestaurantIndex from './RestaurantIndex.js'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageIndex}/>
        <Route exact path="/restaurants" component={RestaurantIndex}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App
