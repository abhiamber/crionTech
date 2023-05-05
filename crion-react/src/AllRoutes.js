import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNewMovie from "./pages/AddNewMovie";
import EditMovie from "./pages/EditMovie";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNewMovie />} />
        <Route path="/crud" element={<EditMovie />} />
        <Route path="/Login" element={<Login />} />{" "}
        <Route path="/Singup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
