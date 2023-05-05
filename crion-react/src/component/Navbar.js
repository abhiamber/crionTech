import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  let data = useSelector((store) => store);
  // console.log(data.auth);
  const handleLogout = () => {};
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className={style.search}>
        <input placeholder="SearchMovie Here" type="text" />
        <button>Submit</button>
      </div>
      <div className={style.nav}>
        <Link to="/"> Home </Link>
        <Link to="/add"> Add New Movie </Link>
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
        )}{" "}
      </div>
    </div>
  );
};

export default Navbar;
