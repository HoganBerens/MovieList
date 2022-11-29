import React, { useState } from "react";
import "./header.css";

const getFilteredItems = (search, movies) => {
  if (!search) {
    return movies;
  }
  return [movies].filter((movie) => movie.name.includes(movies));
};

const Header = () => {
  const [search, setSearch] = useState("");

  let searchTitle =
    "  https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=1c60d7b05efa5867f0454700abea2d49&language=en-US&page=1";

  const movies = { searchTitle };

  const filteredItem = getFilteredItems(search, movies);

  return (
    <div>
      <div className="header-wrapper">
        <div className="home-button" href={`/home`}>
          Home
        </div>
        <div className="title">Movie List</div>

        <label className="search-icon">Search</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>

        <ul>
          {[filteredItem].map((value, index) => (
            <h1 key={index}>{value.name}</h1>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
