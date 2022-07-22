import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/peliculas.png' 
import IMG2 from '../../assets/aplicacion.jpeg' 


/* const data = [
  {imagen:IMG1,nombre:'Peliculas',demo:'https://github.com',git:'https://github.com' },
  {imagen:IMG2,nombre:'Apicacion telefono',demo:'https://githubsa.com',git:'https://githubaas.com' },
  {imagen:IMG1,nombre:'Peliculas3',demo:'https://githubs.com',git:'https://githubaa.com' }
]
 */


const Portafolio = () => {
  return (
    <section id="portafolio">
    <h2>Portafolio</h2>
    <div className="container__card">
      <div className="card__father">
         <div className="card">
          <div className="card__front" style={{backgroundImage: `url(${IMG1})`}}>
            <div className="bg"></div>
            <div className="body__card_front">
              <h2>Peliculas</h2>
            </div>
          </div>
          <div className="card__back">
            <div className="body__card_back">
              <h2>Pelisculas</h2>
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
                href="https://david-urosa-movies.netlify.app"
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
              <h2>aplicacion</h2>
            </div>
          </div>
          <div className="card__back">
            <div className="body__card_back">
              <h2>apicacion movil</h2>
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
  </section>  )
}

export default Portafolio