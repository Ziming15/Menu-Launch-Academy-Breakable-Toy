import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const HomePageIndex = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [redirect, SetRedirect] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetRedirect(!redirect);
  };

  if (redirect) {
    return <Redirect to={`/restaurants/${searchCity}`} />;
  }

  return (
    <div className="home-background-image">
      <form onSubmit={handleSubmit} className="search-bar">
        <label>
          <input
          className="input-group-field"
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Address, neighborhood, city, state, or zip"
          />
        </label>
        <div className="search">
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default HomePageIndex;
