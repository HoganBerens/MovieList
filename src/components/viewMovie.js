import React, { useEffect, useState } from "react";
import { api_key, popular, imagePath, videoPath } from "./utils";
import "./viewMovie.css";
import { Link } from "react-router-dom";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewMovie = () => {
  const [clickedMovie, setClickedMovie] = useState({});

  const trailerHandler = () => {
    fetch(
      `${videoPath}${clickedMovie.id}/videos?api_key=${api_key}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
            <b>Description: </b>
            {clickedMovie.overview}
          </div>
          <div className="date">
            <b>Release Date: </b>
            {clickedMovie.release_date}
          </div>
          <div className="rating">
            <b>Rating: </b>
            {clickedMovie.vote_average}
          </div>
          <div className="trailer" onClick={trailerHandler}>
            Link To Trailer
          </div>
        </div>
      </div>
      <Link className="backButton" to={`/`}>
        <FontAwesomeIcon icon="fa-solid fa-x" />
      </Link>
    </div>
  );
};

export default ViewMovie;
