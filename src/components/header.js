import React, { useState } from "react";
import "./header.css";
import { api_key, debounce, imagePath } from "./utils";
import { Link } from "react-router-dom";

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
        <Link className="home-button" to={`/`}>
          Home
        </Link>
        <div className="title">Movie List</div>
        <div className="search-wrapper">
          <label className="search-icon">Search</label>
          <input type="text" onChange={submitHandler} />
          {console.log(searchResults)}
          {!!searchResults.length && (
            <div className="results-wrapper">
              {searchResults.map((movie, index) => (
                <Link key={index} to={`/viewMovie?id=${movie.id}`}>
                  <div className="results">
                    <img
                      className="search-poster"
                      src={`${imagePath}${movie.poster_path}`}
                    />
                    <div className="results-title">{movie.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
