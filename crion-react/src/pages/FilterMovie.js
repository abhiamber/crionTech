import React, { useState } from "react";
import style from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortFunc } from "../redux/Movie.action";

const FilterMovie = () => {
  let [tilte, setTitle] = useState("");
  let [director, setDirector] = useState("");
  let [genre, setGenre] = useState("");
  let [year, setTsetYear] = useState("");

  let dispatch = useDispatch();
  let { data } = useSelector((store) => store);

  const handleSubmit = () => {
    if (tilte) {
      dispatch(sortFunc({ types: 1, val: tilte, data }));
      setTitle("");
    } else if (director) {
      console.log(director);
      dispatch(sortFunc({ types: 2, val: director, data }));

      setDirector("");
    } else if (genre) {
      dispatch(sortFunc({ types: 3, val: genre, data }));

      setGenre("");
    } else if (year) {
      dispatch(sortFunc({ types: 4, val: year, data }));

      setTsetYear("");
    }
  };

  return (
    <div className={style.filters}>
      <div className={style.filterDiv}>
        <p>Sort by title</p>
        <select
          placeholder="Sort by title"
          onChange={(e) => setTitle(e.target.value)}
        >
          {" "}
          <option>select</option>
          <option value="ASC">ASC</option>
          <option value="DSC">DSC</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className={style.filterDiv}>
        <p>Sort by Year</p>

        <select
          placeholder="Sort by Year"
          onChange={(e) => setTsetYear(e.target.value)}
        >
          <option>select</option>

          <option value="ASC">ASC</option>
          <option value="DSC">DSC</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className={style.filterDiv}>
        <p>Sort by director</p>

        <select
          placeholder="Sort by director"
          onChange={(e) => setDirector(e.target.value)}
        >
          {" "}
          <option>select</option>
          <option value="ASC">ASC</option>
          <option value="DSC">DSC</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className={style.filterDiv}>
        <p>Sort by Genre</p>

        <select
          placeholder="Sort by Genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          {" "}
          <option>select</option>
          <option value="ASC">ASC</option>
          <option value="DSC">DSC</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FilterMovie;
