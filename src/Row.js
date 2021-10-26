import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  // container for movies - variable to carry movies
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl); // we have passed in different URLs to <Row>
      setMovies(request.data.results);
      return request; // with any promise or Async function always return something
    }
    fetchData();
  }, [fetchUrl]); // fetchUrl is dependancy here

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            //adding checks before rendering movies
            ((isLargeRow && movie.poster_path) || //if it's large movie and if poster_path exists
              (!isLargeRow && movie.backdrop_path)) && ( // Or if it's not LargeRow && movie.backdrop_path exists
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
