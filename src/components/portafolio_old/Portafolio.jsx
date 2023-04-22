import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/peliculas.png";
import IMG2 from "../../assets/lista_tareas.png";
import IMG3 from "../../assets/socials.png";

import { useTranslation } from "react-i18next";

const data = [
  
  {
    imagen: IMG3,
    nombre: "Socials",
    description: "this is a design of a social network",
    demo: "https://social-david-urosa-git-master-davidurosa.vercel.app",
    git: "https://githubaa.com",
  },
  {
    imagen: IMG2,
    nombre: "Things to do",
    description: "It is a tool to organize your day",
    demo: "https://lista-tarea-david.netlify.app",
    git: "https://githubaa.com",
  },
  {
    imagen: IMG1,
    nombre: "Movies",
    description:
      "Movies page, was designed with React, consuming an API",
    demo: "https://david-urosa-movies.netlify.app",
    git: "https://github.com",
  },

  
];

const Portafolio = () => {
  const [t] = useTranslation("global");

  return (
    <section id="portafolio">
      <h2>{t("portfolio.portfolio")}</h2>
      <div className="container__card">
        {data.map(({ imagen, nombre, description, demo, git }, index) => {
          return (
            <div key={index} className="card__father">
              <div className="card">
                <div
                  className="card__front"
                  style={{ backgroundImage: `url(${imagen})` }}
                >
                  <div className="bg"></div>
                  <div className="body__card_front">
                    <h2>{nombre}</h2>
                  </div>
                </div>
                <div className="card__back">
                  <div className="body__card_back">
                    <h2>{nombre}</h2>
                    <p>{description}</p>
                    <a
                      href={git}
                      className="btn btn_all "
                      target="_blank"
                      rel="noreferrer"
                    >
                      GIT
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
            </div>
          );
        })}

        {/* 2 */}
      </div>
    </section>
  );
};

export default Portafolio;
