import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { imagePath } from "./utils";

const FavoriteMovies = (props) => {
  const { favorited, favoriteHandler } = props;

  return (
    <div>
      <h1 className="movieListTitles">Favorite Movies</h1>
      <div className="favoriteWrapper">
        {favorited.map((movie, index) => (
          <div className="favoriteMovie">
            <Link
              to={`/viewMovie?id=${movie.id}`}
              className="movieWrapper"
              key={index}
            >
              <FontAwesomeIcon
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

export default FavoriteMovies;
