import "./movie-search-page.css";
import { useState } from "react";
import { fetchMovie } from "../util/movieapi";
import { useQuery } from "@tanstack/react-query";
import { OrbitProgress } from "react-loading-indicators";
import searchsvg from "../../public/searchicon.svg";
import { MovieCard } from "../components/movieCard";

export default function MovieSearchApp() {
  const [movieInput, setMovieInput] = useState("");
  const [movieName, setMovieName] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", movieName],
    queryFn: () => fetchMovie(movieName),
    enabled: !!movieName,
  });
  const movieResults = data?.results || [];
  let content;
  if (isLoading) {
    content = (
      <OrbitProgress color="#F5C518" size="medium" text="" textColor="" />
    );
  } else if (isError) {
    content = <div>Failed to fetch movie: {error.message}</div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMovieName(movieInput);
  }
  return (
    <div className="movieAppContainer">
      <div className="movieSearchBar">
        <form onSubmit={handleSubmit} className="movieSearchBarForm">
          <input
            type="text"
            placeholder="enter movie name"
            id="moviename"
            onChange={(e) => setMovieInput(e.target.value)}
            value={movieInput}
          />
          <button className="movieSearchButton" type="submit">
            <img src={searchsvg} />
          </button>
        </form>
      </div>
      {content}
      {movieResults.length > 0 && (
        <div className="movieList">
          {movieResults.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
