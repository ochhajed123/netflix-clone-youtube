import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./request";

function Banner() {
  // to get movies here
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // to fetch movies
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals); // this will make request
      console.log("request", request);
      // request will come back
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log("movie from Banner", movie);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: " center center ",
      }}
    >
      <div className="banner__content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.originalName}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">List</button>
        </div>
        <div className="banner__description">
          {truncate(`${movie.overview}`, 150)}
        </div>
      </div>
      <div className="fade--fadeBottom"></div>
    </header>
  );
}

export default Banner;
