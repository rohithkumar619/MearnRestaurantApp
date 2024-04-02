import React from "react";
import NavBar from "../components/NavBar";
import { AboutPage } from "../helpers/AboutPage";
import Pizza from "../assets/menu/margherita.jpg";
import Pizza1 from "../assets/menu/pepperoni.jpg";
import "../styles/About.css";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutbackground">
        <img className="pizza" src={Pizza} />
        <img className="pizza1" src={Pizza1} />
      </div>
      <div className="about">
        <h1>About Us</h1>
        <h1 className="welcome">Welcome to MC Pizzas!</h1>
        <p className="aboutdescription">
          At Rohith Pizzas, we're not just about serving pizzas; we're about
          crafting an experience that tantalizes your taste buds and leaves you
          craving for more. With a passion for perfection and a commitment to
          quality, we've been delighting pizza lovers with our mouthwatering
          creations since 2000's.
        </p>
        {AboutPage.map((desc) => {
          return (
            <div className="About">
              <h1 className="aboutname">{desc.name}</h1>
              <p className="aboutdescription">{desc.description}</p>
            </div>
          );
        })}
        <h2 className="welcome">Thank You My Lovely Customers</h2>
      </div>
      <Footer />
    </div>
  );
};

export default About;
