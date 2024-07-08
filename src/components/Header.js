import React, { useEffect, useState } from "react";
import "./Header.css";
import companyLogo from "../assets/logoempresas/GeCode.webp"; // Reemplaza con la ruta correcta a tu logo

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="logo-container">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre Mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
