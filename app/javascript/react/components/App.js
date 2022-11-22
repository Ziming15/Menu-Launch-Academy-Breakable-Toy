import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePageIndex from "./HomePage.js";
import LocationShowContainer from "./LocationShowContainer.js";
import RestaurantShowContainer from "./RestaurantShowContainer.js";
import FoodShowContainer from "./FoodShowContainer.js";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageIndex} />
        <Route exact path="/:location" component={LocationShowContainer} />
        <Route
          exact
          path="/:location/:restaurant"
          component={RestaurantShowContainer}
        />
        <Route
          exact
          path="/:location/:restaurant/:food"
          component={FoodShowContainer}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
