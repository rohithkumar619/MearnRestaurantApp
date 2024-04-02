import React from "react";
import "../styles/Checkout.css";
import { NavLink } from "react-router-dom";
const Checkout = () => {
  return (
    <div className="checkout1">
      <h1>Successfully placed the order</h1>
      <h3>Enjoy your Meal</h3>
      <NavLink to="/Home">
        <button>Go back to Home</button>
      </NavLink>
    </div>
  );
};

export default Checkout;
