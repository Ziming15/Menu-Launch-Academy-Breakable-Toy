import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const HomePageIndex = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [redirect, SetRedirect] = useState(false);
  const [search, setSearch] = useState("Address, neighborhood, city, state, or zip")

  const handleChange = (event) => {
    event.preventDefault();
    setSearchCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetRedirect(true);
    if (searchCity === "") {
      setSearch("Cannot be empty")
    } else {
      setSearch("Address, neighborhood, city, state, or zip")
    }
  };
  
  if (redirect && searchCity !== "" && search === "Address, neighborhood, city, state, or zip") {
    return <Redirect to={`/restaurants/${searchCity}`} />;
  }

  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <form onSubmit={handleSubmit}>
          <div className="input-group input-group-rounded">
            <input
              className="input-group-field"
              type="search"
              name="city"
              onChange={handleChange}
              placeholder={search}
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
