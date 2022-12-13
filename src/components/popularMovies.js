import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagePath } from "./utils";

const PopularMovies = (props) => {
  let { popularMovies, favoriteHandler } = props;

  return (
    <div className="popularMoviesWrapper">
      <h1 className="movieListTitles">Popular Movies</h1>
      <div className="mapWrapper">
        {popularMovies.map((movie, index) => (
          <div>
            <Link
              to={`/viewMovie?id=${movie.id}`}
              className="movieWrapper"
              key={index}
            >
              <FontAwesomeIcon
                className="heart"
                icon={faHeart}
                onClick={favoriteHandler.bind(this, movie)}
              />
              <img
                className="moviePoster"
                src={`${imagePath}${movie.poster_path}`}
              />
              <h2 className="movieTitle">{movie.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
