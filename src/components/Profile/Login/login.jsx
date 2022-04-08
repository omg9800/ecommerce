import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import url from "../../../services/service";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const verifyUser = () => {
    fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("logged");
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userId", JSON.stringify(data.user._id));
        localStorage.setItem("loggedIn", true);
        window.location = "/";
      })
      .catch((e) => {
        console.log(e.message);
        console.log("failed");
      });
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Login</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="item">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li className="submit-btn" onClick={verifyUser}>
            <button>Submit</button>
          </li>
        </ul>

        <span className="not-reg">Not Resistered?</span>
        <Link className="signup" to="/register">
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default Login;
