import React from "react";
import "./about.css";
import ME from "../../assets/david-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>conozca</h5>
      <h2>sobre mi</h2>
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
              <h5>proyectos</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <FiUserCheck className="about__icon" />
              <h5>clientes</h5>
              <small>3+</small>
            </article>
          </div>
          <p>
          Soy TSU informatica. Cuento con mas de 3 años de experiencia, en el area de programacion.
          He completado infinidades de cursos, tanto  el Frontend y Backend.
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
