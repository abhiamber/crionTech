import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../API";
import style from "../styles/AddNew.module.css";

let crediantils = {
  email: "",
  password: "",

  confirm: "",
};
const SignUp = () => {
  let [user, setUser] = useState(crediantils);

  let navigate = useNavigate();

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleSingUp = async () => {
    let { email, password, confirm } = user;
    user.id = Date.now();

    if (!email && !password && !confirm) {
      return alert("plz fill all the required details");
    } else if (password !== confirm) {
      return alert("plz type correct password");
    }
    console.log(user);
    let res = await fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    try {
      let data = await res.json();
      console.log(data);
      alert("singup sucessfull");

      // if (data.status === "OK") {
      navigate("/Login");
      // } else {
      //   return alert("something went wrong try again");
      // }
    } catch (e) {
      console.log(e);
      return alert("something went wrong try again");
    }
  };

  const hanldeGoToLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <div className={style.forms}>
        <p>email</p>
        <input
          name="email"
          tyep="email"
          value={user.email}
          onChange={handleChange}
        />

        <p>password</p>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />

        <p> confirm password</p>
        <input
          name="confirm"
          type="password"
          value={user.confirm}
          onChange={handleChange}
        />

        <button onClick={handleSingUp}>Register</button>
      </div>
      <div className={style.loginFooter}>
        <p>
          already have an account?{" "}
          <span
            onClick={hanldeGoToLogin}
            style={{ color: "teal", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
