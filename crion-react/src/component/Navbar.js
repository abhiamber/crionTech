import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className={style.search}>
        <input placeholder="SearchMovie Here" type="text" />
        <button>Submit</button>
      </div>
      <div className={style.nav}>
        <Link to="/"> Home </Link>
        <Link to="/add"> Add New Movie </Link>
        <Link to="/crud"> Edit&Delete </Link>
      </div>
    </div>
  );
};

export default Navbar;
