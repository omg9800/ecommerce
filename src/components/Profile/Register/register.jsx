import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import "../Login/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import url from "../../../services/service";

toast.configure();

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(user);
  };

  const mapToPost = () => {
    return {
      username: user.username,
      password: user.password,
      email: user.email,
      name: {
        firstname: user.firstname,
        lastname: user.lastname,
      },
    };
  };

  const notify = () => {
    toast.success("Registered! Please login...");
    // window.location = "/profile";
  };

  let data = mapToPost();
  console.log(data);

  const saveUser = () => {
    console.log("registering...");
    fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("success");
        notify();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Register</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="username"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </li>
        </ul>
        <li className="item">
          <button className="signup-btn" onClick={saveUser}>
            Sign Up
          </button>
        </li>
        <span className="al-reg">Already Resistered?</span>
        <Link className="signin" to="/profile">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Register;
