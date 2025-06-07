import React from "react";
import { Link } from "react-router";

export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <p>
        {movie.title}, released: {movie.release_date}
      </p>
    </Link>
  );
};
