import React from "react";
import "../styles/Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave">
        <Wave
          className=""
          fill="#3586ff"
          paused={false}
          options={{
            height: 5,
            amplitude: 20,
            speed: 0.15,
            points: 4,
          }}
        />
      </div>
      <div className="footerInfo">
        <div className="aboutus">
          <h2>¿Quienes somos?</h2>
          <p>
            Crédito para Viajes es un Servicio exluciso de VIP VACACIONES. Obtén
            y activo créditos a precio mayorista para viajes Vacacionales a
            Estados Unidos
          </p>
        </div>
        <div className="logo">
          <img src="img/cer.png" alt="logo" />
        </div>
        <div className="contactUs">
          <h2>Contactanos</h2>
          <p>Conecta con nosotros, sientete libre de contactarnos en cualquier momento, estamos a tu servicio.</p>
          <a href="mailto:cliente@certificadodeviaje.com">
            cliente@certificadodeviaje.com
          </a>
        </div>
      </div>
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
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Validate</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
      <p> CERTIFICADO DE VIAJE | Copyright ©2023 All rights reserved. </p>
    </footer>
  );
};
export default Footer;
