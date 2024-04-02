import React from "react";
import facebook from "../assets/facebook2.png";
import instagram from "../assets/instagram1.png";
import twitter from "../assets/twitter2.png";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialmedia">
        <div className="sm2">
          <img className="sm" src={facebook} />
          <p className="p">facebook</p>
        </div>
        <div className="sm2">
          <img className="sm" src={instagram} />
          <p className="p">instagram</p>
        </div>
        <div className="sm2">
          <img className="sm" src={twitter} />
          <p className="p">twitter</p>
        </div>
      </div>
      <div className="copyright">&copy; 2024 RohithPizzas.com</div>
    </div>
  );
};

export default Footer;
