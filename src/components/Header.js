import React from "react";
import "./Header.css";
import companyLogo from "../assets/logoempresas/GeCode.webp"; // Reemplaza con la ruta correcta a tu logo

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={companyLogo} alt="Company Logo" className="company-logo" />
    </div>
    <h1></h1>
    <nav>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Quienes somos</a>
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

export default Header;
