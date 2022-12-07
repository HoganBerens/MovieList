import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { api_key, popular, imagePath, videoPath } from "./utils";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [favoritedMovie, setFavoritedMovie] = useState([]);

  const favoriteHandler = () => {
    console.log("favorited");
  };

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
      <div className="mapWrapper">
        {popularMovies.map((movie, index) => (
          <div>
            <div>
              <div className="heart">X</div>
            </div>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
