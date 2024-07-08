import React from "react";
import "./Home.css";
import image1 from "../assets/Home/desarrollador.jpg"; // Reemplaza con la ruta correcta a tus imágenes
import image2 from "../assets/Home/team.jpg"; // Reemplaza con la ruta correcta a tus imágenes
import image3 from "../assets/Home/web.jpg"; // Reemplaza con la ruta correcta a tus imágenes

const Home = () => (
  <section id="home">
    <h2>Bienvenido a Mi Portafolio</h2>
    <div className="content">
      <div className="text-image-container">
        <div className="text-box">
          <p>
            Somos GeCode, una pequeña empresa lista para generar grandes
            proyectos, conformados por diferentes colaboradores con experiencia
            y conocimiento suficiente para cumplir tus expectativas. Hemos
            tenido la oportunidad de trabajar en proyectos como tiendas en
            línea, landing pages y blogs que permiten a nuestros clientes
            satisfacer las necesidades de su negocio.
          </p>
        </div>
        <img
          src={image1}
          alt="Descripción de la imagen 1"
          className="home-image"
        />
      </div>
      <div className="text-image-container reverse">
        <div className="text-box">
          <p>
            Nuestro enfoque se centra en soluciones innovadoras y efectivas que
            no solo cumplen con los requisitos técnicos, sino que también
            ofrecen una experiencia de usuario excepcional. Nos enorgullecemos
            de nuestra capacidad para trabajar en equipo, la atención al detalle
            y el compromiso con la calidad. En GeCode, encontrarás valores que
            tenemos muy presentes en nuestro día a día, como la honestidad y la
            lealtad, mismos que nos ayudan a encontrar lo mejor para tus
            requerimientos.
          </p>
        </div>
        <img
          src={image2}
          alt="Descripción de la imagen 2"
          className="home-image"
        />
      </div>
      <div className="text-image-container">
        <div className="text-box">
          <p>
            En este portal, encontrarás una selección de trabajos. Cada proyecto
            refleja la dedicación y habilidades, esperando que te proporcione
            una visión clara de lo que podemos aportar. Si tienes alguna
            pregunta, no dudes en contactarnos.
          </p>
        </div>
        <img
          src={image3}
          alt="Descripción de la imagen 3"
          className="home-image"
        />
      </div>
    </div>
  </section>
);

export default Home;
