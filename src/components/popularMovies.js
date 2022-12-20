import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { imagePath } from './utils';
import './popularMovies.css';

const PopularMovies = (props) => {
  let { popularMovies, favoriteHandler } = props;

  return (
    <div className="popularMoviesWrapper">
      <div className="movieListTitles">Popular Movies: </div>
      <div className="mapWrapper">
        {popularMovies.map((movie, index) => (
          <div>
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

export default PopularMovies;
