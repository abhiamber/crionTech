import React, { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import { GET_ITEM } from "../redux/Movie.action.type";
import { getMovieDataFunc, handleUdateFunction } from "../redux/Movie.action";
import { DELETEITEM } from "../redux/Movie.action.type";
import FilterMovie from "./FilterMovie";
let edit = {
  title: "",
  Director: "",
  Genre: "",
};

const Home = () => {
  let [editableData, setEditableData] = useState(edit);

  let [editno, setEditNo] = useState(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { data } = useSelector((store) => store);
  // console.log(data);

  const handleDetailsNavigate = (data) => {
    navigate("/details", {
      state: {
        ...data,
      },
    });
  };

  const handleEditbyData = (e) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  const hanldeEditFuncSubmit = (id) => {
    // console.log(id, editableData);
    dispatch(handleUdateFunction({ editableData, id }));
  };

  // ***********delte item-*********************
  const deletFunctionindividual = (id) => {
    // console.log(id);
    let data = JSON.parse(localStorage.getItem("MoviesData")) || [];

    let filter = data.filter((elem) => elem.id !== id);
    localStorage.setItem("MoviesData", JSON.stringify(filter));

    dispatch({ type: DELETEITEM, payload: id });
  };

  useEffect(() => {
    // console.log("sbchjbchj");
    dispatch(getMovieDataFunc());
  }, []);
  return (
    <div className={style.home}>
      <div style={{ margin: "30px" }}>
        <FilterMovie />
      </div>

      <div className={style.movieList}>
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <img src={elem.Image} alt={elem.Image} />
              <p>Title {elem.title}</p>
              <p>Director {elem.Director}</p>
              <p>Genre {elem.Genre}</p>
              <p>Year {elem.Year}</p>

              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "2px",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleDetailsNavigate(elem)}
              >
                View Details
              </button>
              <br />
              <br />
              <button
                style={{
                  backgroundColor: "green",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setEditNo(elem.id)}
              >
                Edit
              </button>
              {editno === elem.id ? (
                <div
                  className={style.forms}
                  style={{
                    width: "30%",
                    position: "fixed",
                    height: "auto",
                    zIndex: "1000",
                    backgroundColor: "yellow",
                    left: "31%",
                    top: "25%",
                    padding: " 10px 30px",
                  }}
                >
                  <form>
                    <p>Title</p>
                    <input name="title" onChange={handleEditbyData} />
                    <br />
                    <p>Director</p>
                    <input name="Director" onChange={handleEditbyData} /> <br />
                    <p>Genre</p>
                    <input name="Genre" onChange={handleEditbyData} />
                  </form>
                  <button
                    onClick={() => {
                      hanldeEditFuncSubmit(elem.id);
                      setEditNo(null);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    style={{ marginTop: "-100px", width: "50%" }}
                    onClick={() => setEditNo(null)}
                  >
                    Close
                  </button>
                </div>
              ) : null}
              <button
                style={{
                  backgroundColor: "red",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => deletFunctionindividual(elem.id)}
              >
                {" "}
                Delte
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
