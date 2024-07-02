import React from "react";
import "./Projects.css";
import projectLogo from "../assets/logoempresas/Kelom.jpg"; // Reemplaza con la ruta correcta a tu logo

const Projects = () => (
  <section id="projects">
    <h2>Proyectos</h2>
    <div className="project-container">
      <div className="project-wrapper">
        <div className="project">
          <a
            href="https://www.kelom.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={projectLogo}
              alt="Project Logo"
              className="project-logo"
            />
          </a>
        </div>
        <div className="project-description">
          <p>
            Kelom.com.mx ofrece servicios completos de organización y decoración
            de eventos. Con un diseño intuitivo, permite a los usuarios
            planificar y personalizar sus celebraciones, asegurando experiencias
            memorables y únicas.
          </p>
        </div>
      </div>

      {/* Proyecto 2 */}
      {/*
      <div className="project-wrapper">
        <div className="project">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-logo2.png" alt="Project Logo 2" className="project-logo" />
          </a>
        </div>
        <div className="project-description">
          <p>Este proyecto consiste en...</p>
        </div>
      </div>
      */}

      {/* Proyecto 3 */}
      {/*
      <div className="project-wrapper">
        <div className="project">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-logo3.png" alt="Project Logo 3" className="project-logo" />
          </a>
        </div>
        <div className="project-description">
          <p>Este proyecto consiste en...</p>
        </div>
      </div>
      */}

      {/* Proyecto 4 */}
      {/*
      <div className="project-wrapper">
        <div className="project">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-logo4.png" alt="Project Logo 4" className="project-logo" />
          </a>
        </div>
        <div className="project-description">
          <p>Este proyecto consiste en...</p>
        </div>
      </div>
      */}

      {/* Proyecto 5 */}
      {/*
      <div className="project-wrapper">
        <div className="project">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-your-logo5.png" alt="Project Logo 5" className="project-logo" />
          </a>
        </div>
        <div className="project-description">
          <p>Este proyecto consiste en...</p>
        </div>
      </div>
      */}
    </div>
  </section>
);

export default Projects;
