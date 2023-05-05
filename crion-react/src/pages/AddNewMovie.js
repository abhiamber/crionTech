import React, { useState } from "react";
import style from "../styles/AddNew.module.css";
import { useDispatch } from "react-redux";
import { addMovieDataFunc } from "../redux/Movie.action";

let movieDetails = {
  title: "",
  Director: "",
  Year: "",
  Genre: "",
  Image: "",
  Rating: "",
  Cast: "",
};

const AddNewMovie = () => {
  let [moviedata, setMovieData] = useState(movieDetails);
  let dispatch = useDispatch();
  //   let data = useSelector((store) => store);
  const handleChange = (e) => {
    setMovieData({ ...moviedata, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    let { title, Director, Year, Genre, Image, Rating, Cast } = moviedata;
    moviedata.id = Date.now();
    // moviedata.user = data.auth;

    if (!title || !Director || !Year || !Genre || !Image || !Rating || !Cast) {
      return alert("Please fill all the required data");
    }

    dispatch(addMovieDataFunc(moviedata));
    setMovieData({ ...movieDetails });
    alert("movie added");
  };
  return (
    <div>
      <div className={style.forms}>
        <form>
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={moviedata.title}
            onChange={handleChange}
          />

          <p>Director</p>
          <input
            type="text"
            name="Director"
            value={moviedata.Director}
            onChange={handleChange}
          />

          <p>Year</p>
          <input
            type="date"
            name="Year"
            value={moviedata.Year}
            onChange={handleChange}
          />

          <p>Genre</p>
          <input
            type="text"
            name="Genre"
            value={moviedata.Genre}
            onChange={handleChange}
          />

          <p>Image</p>
          <input
            type="url"
            name="Image"
            value={moviedata.Image}
            onChange={handleChange}
          />

          <p>Cast</p>
          <input
            type="text"
            name="Cast"
            value={moviedata.Cast}
            onChange={handleChange}
          />

          <p>Rating</p>
          <input
            type="text"
            name="Rating"
            value={moviedata.Rating}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddNewMovie;
