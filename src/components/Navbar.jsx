import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <section className="nav">
      <header className="default-header" style={{ zIndex: "5" }}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand fade-item" href="index.html">
              <img src="/img/cer.png" alt="" width="150px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-start"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="fade-item1">
                  <a href="#formvalidar">Validar mi Viaje</a>
                </li>
                <li className="fade-item2">
                  <a href="#">Crédito para Viajes</a>
                </li>
                <li className="fade-item3">
                  <a href="#">Vip Vacaciones</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
