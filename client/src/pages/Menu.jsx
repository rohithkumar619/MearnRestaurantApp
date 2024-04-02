import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { MenuList } from "../helpers/MenuList";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
import Footer from "../components/Footer";
const Menu = () => {
  const [orders, setOrders] = useState([]);
  const handleOrder = (image, name, price) => {
    const newOrder = { image, name, price };
    setOrders([...orders, newOrder]);
  };
  const handleDelete = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);

    setOrders(updatedOrders);
  };
  return (
    <div className="menu">
      <NavBar />

      <div className="div2">
        <div className="menutype">
          <div className="menutitle">Our Menu</div>
          <div className="menulist">
            {MenuList.map((item, index) => {
              return (
                <div className="menuitem">
                  <img className="itemimage" src={item.image} />
                  <h2 className="itemname">{item.name}</h2>
                  <p className="itemprice">{item.price}/-</p>
                  <button
                    onClick={() =>
                      handleOrder(item.image, item.name, item.price)
                    }
                  >
                    Order
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="summary">
          <p className="summarytitle">Your Basket</p>
          <div className="summaryorders">
            {orders.length === 0 ? (
              <p className="noitems">
                Your basket looks a little empty. Why not check out some of our
                unbeatable deals?
              </p>
            ) : (
              orders.map((od, index) => (
                <div className="summaryitem" key={index}>
                  <img className="summaryimage" src={od.image} alt={od.name} />
                  <h3 className="summaryname">{od.name}</h3>
                  <p className="summaryprice">{od.price}</p>
                  <p onClick={() => handleDelete(index)} className="delete">
                    X
                  </p>
                </div>
              ))
            )}
          </div>
          <Link className="checkout" to="/Checkout">
            Checkout
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
