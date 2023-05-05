import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/AddNew.module.css";

import { API } from "../API";
import { useDispatch } from "react-redux";
// import { getToken } from "../Redux/action";
let getToken;
let crediantils = {
  email: "",
  password: "",
};

const Login = () => {
  let [user, setUser] = useState(crediantils);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleLogin = async () => {
    let { email, password } = user;

    if (!email && !password) {
      return alert("plz fill all the required details");
    }
    console.log(user);

    let res = await fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      let data = await res.json();
      console.log(data);
      if (data.status === "OK") {
        localStorage.setItem("token", data.message);
        dispatch(getToken());

        dispatch({ type: "LOGIN", payload: data.message });
        setUser(crediantils);
        navigate("/home");
      } else {
        return alert("something weent wrong try again");
      }
    } catch (e) {
      console.log(e);
      return alert("something weent wrong try again");
    }
  };

  const hanldeGoTOSingup = () => {
    navigate("/Singup");
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("token")) {
  //       navigate("/");
  //     }
  //   }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>LogIn</h2>
      <div className={style.forms}>
        <p>email</p>
        <input
          name="userName"
          tyep="text"
          value={user.userName}
          onChange={handleChange}
        />
        <p>password</p>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className={style.loginFooter}>
        <p>
          don't have an account?{" "}
          <span
            onClick={hanldeGoTOSingup}
            style={{ color: "teal", cursor: "pointer" }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
