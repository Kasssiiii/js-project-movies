import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <p>
            {movie.title}, released: {movie.release_date}
          </p>
        </Link>
      ))}
    </>
  );
};
