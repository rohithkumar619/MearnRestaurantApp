import React, { useState } from "react";
import "../src/Signup.css";
import pizzahd2 from "../src/assets/Hd/pizzahd2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/", { name, email, password })
      .then((result) => console.log(result));
    navigate("/Login").catch((err) => console.log(err));
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
          Join the pizza party! Sign up to MC Pizzas and unlock delicious deals
        </h5>
      </div>
      <div className="form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="element">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="already">Already have an Account</p>
        <Link className="loginbutton" to="/Login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
