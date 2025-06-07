import React from "react";
import { Link } from "react-router";

import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  const imageLocation = "http://image.tmdb.org/t/p/w500/";
  return (
    <Link className="card" to={`/movies/${movie.id}`}>
      <img
        src={`${imageLocation}${movie.poster_path}`}
        alt={movie.title}
        className="mainImage"
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>Released: {movie.release_date}</p>
      </div>
    </Link>
  );
};
