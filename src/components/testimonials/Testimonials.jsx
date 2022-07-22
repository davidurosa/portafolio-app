import React from "react";
import "./testimonials.css";
import IMG1 from '../../assets/peliculas.png' 
import IMG2 from '../../assets/aplicacion.jpeg'
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonios</h2>
      <div className="container__card">
        <div className="card__father">
           <div className="card">
            <div className="card__front" style={{backgroundImage: `url(${IMG1})`}}>
              <div className="bg"></div>
              <div className="body__card_front">
                <h1>Peliculas</h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>Pelisculas</h1>
                <p>
                   es una pagina de peliculas
                   fue diseñada con react consumiendo una api
                </p>
                <a
                  href="https://www.linkedin.com/in/david-urosa-9a9463144/"
                  className="btn btn_all "
                  target="_blank"
                  rel="noreferrer"
                >
                  GIT
                </a>
                <a
                  href="https://www.linkedin.com/in/david-urosa-9a9463144/"
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
        {/* 2 */}
        <div className="card__father">
           <div className="card">
            <div className="card__front" style={{backgroundImage: `url(${IMG2})`}}>
              <div className="bg"></div>
              <div className="body__card_front">
                <h1>aplicacion</h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>apicacion movil</h1>
                <p>
                   esta aplicacion 
                   fue diseñada con react Native
                </p>
                <a
                  href="https://www.linkedin.com/in/david-urosa-9a9463144/"
                  className="btn btn_all "
                  target="_blank"
                  rel="noreferrer"
                >
                  GIT
                </a>
                <a
                  href="https://www.linkedin.com/in/david-urosa-9a9463144/"
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
        
        
      </div>
    </section>
  );
};

export default Testimonials;
