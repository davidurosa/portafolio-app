import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/peliculas.png";
import IMG2 from "../../assets/aplicacion.png";
import IMG3 from "../../assets/lista_tareas.png";

const data = [
  {
    imagen: IMG3,
    nombre: "Lista de tareas",
    description: "Es una  herramientas para ordenar tu día",
    demo: "https://lista-tarea-david.netlify.app",
    git: "https://githubaa.com",
  },
  {
    imagen: IMG1,
    nombre: "Peliculas",
    description:
      "es una pagina de peliculas fue diseñada con react consumiendo una api",
    demo: "https://david-urosa-movies.netlify.app",
    git: "https://github.com",
  },

  {
    imagen: IMG2,
    nombre: "Apicacion movil",
    description: "esta aplicacion fue diseñada con react Native",
    demo: "https://githubsa.com",
    git: "https://githubaas.com",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h2>Portafolio</h2>
      <div className="container__card">
        {data.map(({ imagen, nombre, description, demo, git }, index) => {
          return (
            <div className="card__father">
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
                      Ver
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
