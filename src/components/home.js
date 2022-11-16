import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { api_key, popular, imagePath, videoPath } from './utils';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const posterHandler = (id) => {
    fetch(`${videoPath}${id}/videos?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        let trailer = data.results.find(
          (movie) => movie.name === 'Official Trailer'
        );
        console.log(trailer);
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
      });
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
      <div className="header">Movie List</div>
      <div className="mapWrapper">
        {popularMovies.map((movie, index) => (
          <Link
            to={`/viewMovie?id=${movie.id}`}
            className="movieWrapper"
            key={index}
          >
            <h2 className="movieTitle">{movie.title}</h2>
            <img
              onClick={() => {
                posterHandler(movie.id);
              }}
              className="moviePoster"
              src={`${imagePath}${movie.poster_path}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
