import React, { useState } from 'react';
import './header.css';
import { api_key, debounce, imagePath } from './utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  let submitHandler = debounce((event) => {
    if (event.target.value) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.results) {
            setSearchResults(data.results);
            setHasSearched(true);
          }
        })
        .catch((err) => console.error(err));
    } else {
      setHasSearched(false);
      setSearchResults([]);
    }
  }, 1000);

  if (hasSearched === true) {
  }

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
          {!!searchResults.length ? (
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
          ) : hasSearched ? (
            <div className="noResults">No Movies Found</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
