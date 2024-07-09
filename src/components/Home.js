import React, { useRef } from "react";
import "./Home.css";
import image1 from "../assets/Home/desarrollador.jpg"; // Reemplaza con la ruta correcta a tus imágenes
import image2 from "../assets/Home/team.jpg"; // Reemplaza con la ruta correcta a tus imágenes
import image3 from "../assets/Home/web.jpg"; // Reemplaza con la ruta correcta a tus imágenes

const Home = () => {
  const handleMouseMove = (e, ref) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = ref.current;
    const rotateY = (offsetX / offsetWidth - 0.5) * 30; // Ajusta los valores para mayor o menor efecto
    const rotateX = (offsetY / offsetHeight - 0.5) * -30;
    ref.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  return (
    <section id="home">
      <h2>Bienvenido a Mi Portafolio</h2>
      <div className="content">
        <div className="text-image-container">
          <div className="text-box">
            <p>
              Somos GeCode, una pequeña empresa lista para generar grandes
              proyectos, conformados por diferentes colaboradores con
              experiencia y conocimiento suficiente para cumplir tus
              expectativas. Hemos tenido la oportunidad de trabajar en proyectos
              como tiendas en línea, landing pages y blogs que permiten a
              nuestros clientes satisfacer las necesidades de su negocio.
            </p>
          </div>
          <img
            src={image1}
            alt="Descripción de la imagen 1"
            className="home-image"
            ref={img1Ref}
            onMouseMove={(e) => handleMouseMove(e, img1Ref)}
            onMouseLeave={() => handleMouseLeave(img1Ref)}
          />
        </div>
        <div className="text-image-container reverse">
          <div className="text-box">
            <p>
              Nuestro enfoque se centra en soluciones innovadoras y efectivas
              que no solo cumplen con los requisitos técnicos, sino que también
              ofrecen una experiencia de usuario excepcional. Nos enorgullecemos
              de nuestra capacidad para trabajar en equipo, la atención al
              detalle y el compromiso con la calidad. En GeCode, encontrarás
              valores que tenemos muy presentes en nuestro día a día, como la
              honestidad y la lealtad, mismos que nos ayudan a encontrar lo
              mejor para tus requerimientos.
            </p>
          </div>
          <img
            src={image2}
            alt="Descripción de la imagen 2"
            className="home-image"
            ref={img2Ref}
            onMouseMove={(e) => handleMouseMove(e, img2Ref)}
            onMouseLeave={() => handleMouseLeave(img2Ref)}
          />
        </div>
        <div className="text-image-container">
          <div className="text-box">
            <p>
              En este portal, encontrarás una selección de trabajos. Cada
              proyecto refleja la dedicación y habilidades, esperando que te
              proporcione una visión clara de lo que podemos aportar. Si tienes
              alguna pregunta, no dudes en contactarnos.
            </p>
          </div>
          <img
            src={image3}
            alt="Descripción de la imagen 3"
            className="home-image"
            ref={img3Ref}
            onMouseMove={(e) => handleMouseMove(e, img3Ref)}
            onMouseLeave={() => handleMouseLeave(img3Ref)}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
