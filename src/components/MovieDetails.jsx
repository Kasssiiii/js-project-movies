import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import "./MovieDetails.css";

export const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;
  const movieId = params.movieId;

  const apiURI = `https://api.themoviedb.org/3/movie/${movieId}`;

  const imageLocation = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(`${apiURI}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (movieDetails) {
    return (
      <div className="detailContainer">
        <img
          src={`${imageLocation}${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          className="backgroundImage"
        />
        <Link className="arrow" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
              fill="#fff"
              fillRule="evenodd"
            ></path>
          </svg>{" "}
          <h3 className="arrowTitle">Movies</h3>
        </Link>
        <div className="summary">
          <img
            src={`${imageLocation}${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="detailImage"
          />

          <div className="details">
            <h2 className="title">
              <span>{movieDetails.title+" "}</span>
              <div className="rating"> ⭐️{movieDetails.vote_average} </div>
            </h2>
            <p className="overview">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    );
  }

  return <h1>Loading..</h1>;
};
