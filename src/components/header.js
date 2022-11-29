import React, { useState, useCallback } from "react";
import "./header.css";
import { api_key, debounce } from "./utils";

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);

  let submitHandler = debounce((event) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results.length) {
          setSearchResults(data.results);
        }
      })
      .catch((err) => console.error(err));
  }, 1000);

  return (
    <div>
      <div className="header-wrapper">
        <div className="home-button" href={`/home`}>
          Home
        </div>
        <div className="title">Movie List</div>
        <div className="search-wrapper">
          <label className="search-icon">Search</label>
          <input type="text" onChange={submitHandler} />
          <div className="results-wrapper">
            {searchResults.map((movie, index) => (
              <div key={index}>
                <div>{console.log(movie)}</div>
                <div>{movie.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
