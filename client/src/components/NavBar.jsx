import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ register }) => {
  return (
    <div className="navbar">
      <div className="leftside">
        <img className="logo" src={Logo} />
        <p className="logoName">MC Pizzas</p>
      </div>
      <div className="rightside">
        <Link className="btn" to="/Home">
          Home
        </Link>
        <Link className="btn" to="/Menu">
          Menu
        </Link>
        <Link className="btn" to="/About">
          About
        </Link>
        <Link className="btn" to="/Contact">
          Contact
        </Link>
        {register && (
          <Link className="btn registers" to="/">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
