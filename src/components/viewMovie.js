import React, { useEffect, useState } from "react";
import { api_key, popular, imagePath, videoPath } from "./utils";
import "./viewMovie.css";
import { Link } from "react-router-dom";
import Header from "./header";

const ViewMovie = () => {
  const [clickedMovie, setClickedMovie] = useState({});

  const trailerHandler = () => {
    fetch(
      `${videoPath}${clickedMovie.id}/videos?api_key=${api_key}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        let trailer = data.results.find(
          (movie) => movie.name === "Official Trailer"
        );

        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      });
  };

  useEffect(() => {
    fetch(
      `${videoPath}${window.location.search.replace(
        "?id=",
        ""
      )}?api_key=${api_key}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClickedMovie(data);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="wrapper">
        <img
          className="moviePoster"
          src={`${imagePath}${clickedMovie.poster_path}`}
        />
        <div className="childrenWrapper">
          <h1 className="title">{clickedMovie.title}</h1>
          <div className="description">
            {" "}
            Description: {clickedMovie.overview}
          </div>
          <div className="date"> Release Date:{clickedMovie.release_date}</div>
          <div className="rating"> Rating:{clickedMovie.vote_average}</div>
          <div onClick={trailerHandler}>Trailer</div>
        </div>
      </div>
      <Link className="backButton" to={`/`}>
        X
      </Link>
    </div>
  );
};

export default ViewMovie;
