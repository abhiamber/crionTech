import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const { state } = useLocation();
  //   console.log(state);
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <img src={state.Image} alt={state.Image} />
      <p>Title {state.title}</p>
      <p>Director {state.Director}</p>
      <p>Genre {state.Genre}</p>
      <p>Cast {state.Cast}</p>
      <p>Rating {state.Rating}</p>
      <p>Year {state.Year}</p>
    </div>
  );
};

export default MovieDetails;
