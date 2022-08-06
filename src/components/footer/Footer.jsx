/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaLinkedinIn,FaFacebookF,FaTwitter} from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const [t] = useTranslation("global");


  return (
    <footer>
      <a href="#" className='footer__logo'>DAVID</a>
      <ul className='permalinks'>
        <li><a href="#">{t("footer.home")}</a></li>
        <li><a href="#about">{t("footer.about")}</a></li>
        <li><a href="#experience">{t("footer.experience")}</a></li>
        <li><a href="#services">{t("footer.services")}</a></li>
        <li><a href="#portafolio">{t("footer.portfolio")}</a></li>
        <li><a href="#contact">{t("footer.contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/david.urosa.7/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://twitter.com/urosaclaw"  target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/david-urosa-9a9463144/"  target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
      </div>
      <div className="footer__copyright">
        <small>
         &copy; {t("footer.all")}
        </small>
      </div>
    </footer>
  )
}

export default Footer