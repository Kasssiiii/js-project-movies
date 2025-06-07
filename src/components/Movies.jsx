import { useEffect, useState } from "react";
import { MovieDetails } from "./MovieDetails";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiURI = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    fetch(`${apiURI}?api_key=${apiKey}&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  if (movies.length === 0) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}, released: {movie.release_date}
          </li>
        ))}
      </ol>
      <MovieDetails movieId={movies[0].id} />
    </>
  );
};
