import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Navbar.module.css";
// import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // let data = useSelector((store) => store);
  // let navigate = useNavigate();
  // let dispatch = useDispatch();
  // // console.log(data.auth);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   dispatch({ type: "Logout" });
  //   navigate("/");
  // };
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className={style.search}>
        <input placeholder="SearchMovie Here" type="text" />
        <button>Submit</button>
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
