import { BrowserRouter, Route, Routes } from "react-router";
import { Movies } from "./components/Movies";
import { MovieDetails } from "./components/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
