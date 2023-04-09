import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/peliculas.png";
import IMG3 from "../../assets/lista_tareas.png";
import IMG4 from "../../assets/socials.png";

import { useTranslation } from "react-i18next";
import { BsGithub } from "react-icons/bs";

const data = [

  {
    imagen: IMG4,
    nombre: "Socials",
    description: "this is a design of a social network",
    demo: "https://social-david-urosa-git-master-davidurosa.vercel.app",
    git: "https://githubaa.com",
  },
  {
    imagen: IMG3,
    nombre: "Things to do",
    description: "It is a tool to organize your day",
    demo: "https://lista-tarea-david.netlify.app",
    git: "https://githubaa.com",
  },
  {
    imagen: IMG1,
    nombre: "Movies",
    description:
      "Movies page, was designed with React",
    demo: "https://david-urosa-movies.netlify.app",
    git: "https://github.com",
  },

  
];

const Portafolio = () => {
  const [t] = useTranslation("global");

  return (
    <section id="portafolio" className="portafolio">
      <h2>{t("portfolio.portfolio")}</h2>
        <div className="portafolio-container container">
        {data.map(({ imagen, nombre, description, demo, git }, index) => {
             return (
            <div className="portafolio-box">
                <img src={imagen} alt="" />
                <div className="portafolio-layer">
                    <h4>{nombre}</h4>
                    <p>{description}</p>
                    <div className="portafolio-buttoms">

                    <a
                      href={git}
                      className="btn btn_all "
                      target="_blank"
                      rel="noreferrer"
                    >
                           <BsGithub/>

                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary btn_all"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("portfolio.watch")}
                    </a>
                    </div>
                </div>
            </div>
              );
            })}
    
        </div>
    </section>
  );
};

export default Portafolio;
