import React from "react";
import style from "../styles/AddNew.module.css";

const AddNewMovie = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>AddNewMovie</h2>
      <div className={style.forms}>
        <form>
          <p>Title</p>
          <input type="text" />

          <p>Director</p>
          <input type="text" />

          <p>Year</p>
          <input type="date" />

          <p>Genre</p>
          <input type="text" />

          <p>Image</p>
          <input type="url" />
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AddNewMovie;
