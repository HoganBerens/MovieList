import React, { useCallback, useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { api_key, popular, imagePath } from "./utils";
import Header from "./header";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [favorited, setFavorited] = useState([]);

  let favoriteHandler = useCallback(
    (movie, event) => {
      event.preventDefault();
      setFavorited([...favorited, movie]);
    },
    [favorited]
  );

  useEffect(() => {
    fetch(popular)
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <Header />
      <h1>Favorite Movies</h1>
      <div className="favoriteWrapper">
        {favorited.map((movie, index) => (
          <div className="favoriteMovie">
            <Link
              to={`/viewMovie?id=${movie.id}`}
              className="movieWrapper"
              key={index}
            >
              <h2 className="favoriteTitle">{movie.title}</h2>
              <img
                className="favoritePoster"
                src={`${imagePath}${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
      <h1>Popular Movies</h1>
      <div className="mapWrapper">
        {popularMovies.map((movie, index) => (
          <div>
            <Link
              to={`/viewMovie?id=${movie.id}`}
              className="movieWrapper"
              key={index}
            >
              <h2 className="movieTitle">{movie.title}</h2>
              <img
                className="moviePoster"
                src={`${imagePath}${movie.poster_path}`}
              />
              <div
                className="heart"
                onClick={favoriteHandler.bind(this, movie)}
              >
                X
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
