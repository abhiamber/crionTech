import React, { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { GET_ITEM } from "../redux/Movie.action.type";
import { getMovieDataFunc } from "../redux/Movie.action";
import { DELETEITEM } from "../redux/Movie.action.type";
let edit = {
  title: "",
  Director: "",
  Genre: "",
};

const Home = () => {
  let [editableData, setEditableData] = useState(edit);
  let [mainData, setMainData] = useState([]);
  let [search, setSearch] = useState("");
  let [length, setlength] = useState(0);
  let [selectItem, setSelect] = useState([]);
  let [arr, setArr] = useState([]);
  let [editno, setEditNo] = useState(null);
  let dispatch = useDispatch();
  let { data } = useSelector((store) => store);
  // console.log(data);

  const handleEditbyData = (e) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  const hanldeEditFuncSubmit = (id) => {
    console.log(id, editableData);
    if (editableData.name && editableData.role && editableData.email) {
      let data = JSON.parse(localStorage.getItem("storeData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return editableData;
        } else {
          return elem;
        }
      });
      // setMainData(filter.slice(page * 10, 10));
      // setlength(Math.ceil(filter.length / 10));

      localStorage.setItem("storeData", JSON.stringify(filter));
    } else if (editableData.name && editableData.role) {
      let data = JSON.parse(localStorage.getItem("storeData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return { ...elem, name: editableData.name, role: editableData.role };
        } else {
          return elem;
        }
      });
      // setMainData(filter.slice(page * 10, 10));
      // setlength(Math.ceil(filter.length / 10));

      localStorage.setItem("storeData", JSON.stringify(filter));
    } else if (editableData.name && editableData.email) {
      let data = JSON.parse(localStorage.getItem("storeData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            name: editableData.name,
            email: editableData.email,
          };
        } else {
          return elem;
        }
      });
      // setMainData(filter.slice(page * 10, 10));
      setlength(Math.ceil(filter.length / 10));

      localStorage.setItem("storeData", JSON.stringify(filter));
    } else if (editableData.role && editableData.email) {
      let data = JSON.parse(localStorage.getItem("storeData")) || [];

      let filter = data.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            role: editableData.role,
            email: editableData.email,
          };
        } else {
          return elem;
        }
      });
      // setMainData(filter.slice(page * 10, 10));
      setlength(Math.ceil(filter.length / 10));

      localStorage.setItem("storeData", JSON.stringify(filter));
    }

    setEditableData(edit);
    setEditNo(null);
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
      <div className={style.movieList}>
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <h1>{elem.title}</h1>
              <h1>{elem.Director}</h1>
              <h1>{elem.Genre}</h1>
              <button
                style={{
                  backgroundColor: "green",
                  borderRadius: "5px",
                  padding: "5px",
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
                    <br />
                    <button onClick={() => hanldeEditFuncSubmit(elem.id)}>
                      Submit
                    </button>
                    <br />
                  </form>
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
