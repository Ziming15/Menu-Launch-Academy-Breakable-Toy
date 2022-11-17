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
    <div class="hero-section">
      <div class="hero-section-text">
        <form onSubmit={handleSubmit}>
          <div class="input-group input-group-rounded">
            <input
              className="input-group-field"
              type="search"
              name="city"
              onChange={handleChange}
              placeholder="Address, neighborhood, city, state, or zip"
            />
            <div className="input-group-button">
              <input
                type="submit"
                className="button secondary"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="home-background-image"></div>
      </div>
    </div>
  );
};

export default HomePageIndex;
