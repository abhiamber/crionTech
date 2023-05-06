import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  let { data } = useSelector((store) => store);
  // console.log(data);
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();

  // let navigate = useNavigate();
  // // console.log(data.auth);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   dispatch({ type: "Logout" });
  //   navigate("/");
  // };

  const handleSearch = (no) => {
    if (!search) {
      return alert("Search box is empty");
    }
    let searchData;
    if (search) {
      searchData = data.filter((elem) => {
        if (elem.title === search) {
          return elem;
        } else if (elem.Director === search) {
          return elem;
        } else if (elem.Genre === search) {
          return elem;
        }
      });
    }

    dispatch({ type: "SEARCH", payload: searchData });
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className={style.search}>
        <input
          placeholder="SearchMovie Here"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Submit</button>
      </div>
      <div className={style.nav}>
        <Link to="/"> Home </Link>
        <Link to="/add">Add New Movie </Link>

        {/* {data && data.auth ? (
          <Link to="/add">Add New Movie </Link>
        ) : (
          <Link
            to="/Login"
            onClick={() => {
              alert("Register first to add Movie");
            }}
          >
            Add New Movie{" "}
          </Link>
        )}
        {data && data.auth ? (
          <Link to="/crud">Edit&Delete </Link>
        ) : (
          <Link
            to="/Login"
            onClick={() => {
              alert("Register first to access this route");
            }}
          >
            Edit&Delete{" "}
          </Link>
        )}
        {data && data.auth ? (
          <Link to="/" onClick={handleLogout}>
            LogOut{" "}
          </Link>
        ) : (
          <Link to="/Login">Login </Link>
        )}{" "}*/}
      </div>
    </div>
  );
};

export default Navbar;
