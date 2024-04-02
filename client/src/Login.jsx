import React, { useState } from "react";
import "../src/Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pizzahd2 from "../src/assets/Hd/pizzahd2.jpg";
import NavBar from "./components/NavBar";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      <NavBar />
      <div className="mainimage">
        <img src={pizzahd2} alt="" />
      </div>
      <div className="registertitle">
        <h2>Mc Pizzas</h2>
        <h5>
          Welcome back, pizza lover! Log in to MC Pizzas and let the
          deliciousness continue.
        </h5>
      </div>
      <div className="form formlogin">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="element">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="element">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="registerbutton" type="submit">
            Login
          </button>
        </form>
        <p className="already">Don't have an Account</p>
        <Link className="loginbutton" to="/">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
