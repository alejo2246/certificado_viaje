import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import "animate.css";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  // Función para controlar el evento de scroll
  const handleScroll = () => {
    // Obtener la posición del scroll vertical
    const scrollY = window.scrollY;

    // Si la posición del scroll es mayor que 0, el usuario ha hecho scroll hacia abajo
    setScrolled(scrollY > 0);
  };

  // Agregar el evento de scroll cuando se monta el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Eliminar el evento de scroll cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`transition-colors duration-1000 fixed top-0 w-full z-10 ${
        scrolled ? "bg-gray-100" : ""
      }`}
    >
      <div className="flex items-center md:justify-center  lg:justify-center xlg:justify-center 2xlg:justify-center justify-between px-4 py-2 gap-10  ">
        {/* Logo */}
        <a
          className="text-white justify-self-start animate__animated animate__fadeIn animate__delay-1s"
          href="/"
        >
          <img src="/img/cer.png" alt="" width="150px" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-black font-bold text-xl"
          onClick={toggleMobileMenu}
        >
          {/* You can use an icon here, like an SVG icon */}☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-36">
            <li>
              <a href="#formvalidar">
                <p
                  className={`animate__animated animate__fadeIn animate__delay-2s transition-all duration-1000 font-bold text-xl text-center hover:scale-105 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Validar mi Viaje
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p
                  className={`animate__animated animate__fadeIn animate__delay-2s transition-all duration-1000 font-bold text-xl text-center hover:scale-105 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Crédito para Viajes
                </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p
                  className={`animate__animated animate__fadeIn animate__delay-2s transition-all duration-1000 font-bold text-xl text-center hover:scale-105 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Vip Vacaciones
                </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full top-14 left-0 bg-zinc-100">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  className="text-gray-600 font-medium border-b-2  hover:border-gray-300 hover:text-gray-700"
                  href="#formvalidar"
                >
                  Validar mi Viaje
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-medium border-b-2 hover:border-gray-300 hover:text-gray-700"
                  href="#"
                >
                  Crédito para Viajes
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-medium border-b-2 hover:border-gray-300 hover:text-gray-700"
                  href="#"
                >
                  Vip Vacaciones
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
