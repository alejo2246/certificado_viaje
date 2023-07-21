import React from "react";
import "../styles/Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footerInfo">
      <footer className="footer">
        <ul className="social-icons">
          <li className="li">
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li className="li">
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li className="li">
            <a href="#">
              <BsYoutube />
            </a>
          </li>
        </ul>
        <ul className="menu">
            <li className="li"><a href="">Home</a></li>
            <li className="li"><a href="">About</a></li>
            <li className="li"><a href="">Validate</a></li>
            <li className="li"><a href="">Gallery</a></li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
