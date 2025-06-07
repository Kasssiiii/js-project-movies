import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;
  const movieId = params.movieId;

  const apiURI = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {
    fetch(`${apiURI}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (movieDetails) {
    return (
      <>
        <Link to="/">Go Back</Link>
        <p>Title: {movieDetails.title}</p>
        <p>Stars: {movieDetails.vote_average}</p>
        <p>Description: {movieDetails.overview}</p>
      </>
    );
  }

  return <h1>Loading..</h1>;
};
