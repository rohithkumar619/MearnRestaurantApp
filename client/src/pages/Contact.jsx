import { React, useState } from "react";
import NavBar from "../components/NavBar";
import Pizzaleft from "../assets/menu/pizzaLeft.jpg";
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [success, setsuccess] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gbk86zb", "template_08hed4r", form.current, {
        publicKey: "J1cdFQW9lAQ7c7WtC",
      })
      .then(
        () => {
          setsuccess("Thank you from contacting us");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <NavBar />
      <div className="contact">
        <div className="leftone">
          <img className="pizzaleft" src={Pizzaleft} />
        </div>
        <div className="rightone">
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail} id="contactform">
            <label htmlFor="from_name">Full Name</label>
            <input
              required
              name="from_name"
              placeholder="Enter Full Name..."
              type="text"
            />
            <label htmlFor="from_email">Email </label>
            <input
              required
              name="from_email"
              placeholder="Enter Email..."
              type="email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter meaasge"
              name="message"
              required
            ></textarea>
            <input className="submit" value="send" type="submit" />
          </form>
          <p className="success-msg">{success}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
