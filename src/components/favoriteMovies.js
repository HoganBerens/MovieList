import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { imagePath } from './utils';

const FavoriteMovies = (props) => {
  const { favorited, favoriteHandler } = props;

  return (
    <div>
      <div className="favoriteWrapper">
        {favorited.map((movie, index) => (
          <div className="favoriteMovie">
            <div className="movieListTitles">Favorite Movies: </div>
            <Link
              to={`/viewMovie?id=${movie.id}`}
              className="movieWrapper"
              key={index}
            >
              <div className="heart-wrapper">
                <FontAwesomeIcon
                  className="heart"
                  icon={faHeart}
                  onClick={favoriteHandler.bind(this, movie)}
                />
              </div>
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
