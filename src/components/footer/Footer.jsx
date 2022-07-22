/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaLinkedinIn,FaFacebookF,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DAVID</a>
      <ul className='permalinks'>
        <li><a href="#">Principio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portafolio">Portafolios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/david.urosa.7/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://twitter.com/urosaclaw"  target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/david-urosa-9a9463144/"  target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
      </div>
      <div className="footer__copyright">
        <small>
         &copy; David Urosa, todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer