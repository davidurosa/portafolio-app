import React from "react";
import "./about.css";
import ME from "../../assets/david-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conozca</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3+ años de desarrolador</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>18+</small>
            </article>
            <article className="about__card">
              <FiUserCheck className="about__icon" />
              <h5>Clientes</h5>
              <small>3+</small>
            </article>
          </div>
          <p>
            Soy un Desarrollador de software, con experiencia
            en PHP, específicamente con Laravel Framework. La mayor
            parte de mis proyectos lo he trabajado con este Framework, debido a
            su flexibilidad, su integridad y su robustez. También poseo mucha
            experiencia en administración de bases de datos con
            MySQL. Además, he trabajado en desarrollo front-end
            Javascript con sus diferentes frameworks. Así como también he
            realizado trabajos de diseño web. Por
            otro lado, con el Framework React Native he desarrollado
            aplicaciones móviles para Android.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
