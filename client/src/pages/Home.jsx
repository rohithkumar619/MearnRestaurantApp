import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import pizza from "../assets/Hd/banner3.jpg";
import "../styles/Home.css";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="home">
      <NavBar register={true} />
      <div className="bannerclass">
        <img className="banner" src={pizza} />
      </div>
      <div className="container">
        <h1 className="slogan">Have it Your Way</h1>
        <h2 className="logoname">MC Pizzas</h2>
        <Link className="orderlink" to="/Menu">
          <button className="orderbutton">Order Now</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
