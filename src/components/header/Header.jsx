import { useState } from 'react';
import './header.css';
import Logo from "../../assets/logo.png";
import { AiOutlineMenu } from 'react-icons/ai';
import { useTranslation } from "react-i18next";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [t] = useTranslation("global");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const [activeNav, setactiveNav] = useState('#')

  return (
    <header className="header">
        <div className="container header__container">
            <div className='header__img'>
            <img src={Logo} alt="" />
              <span className='header__title'>avid</span>
            </div>
            <nav  className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#" onClick={()=>setactiveNav('#')}  className={activeNav==='#'?'active':''}>{t("nav.home")}</a>
      <a href="#about" onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''}>{t("nav.about")} </a>
      <a href="#experience" onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience'?'active':''}>{t("nav.experience")} </a>
      <a href="#services" onClick={()=>setactiveNav('#services')} className={activeNav==='#services'?'active':''}>{t("nav.services")} </a>
      <a href="#portafolio" onClick={()=>setactiveNav('#portafolio')} className={activeNav==='#portafolio'?'active':''}>{t("nav.portfolio")}</a>

            </nav>
            <div className='toggle-btn'  onClick={toggleMenu}>
            <AiOutlineMenu/>
            </div>
        </div>    
    </header>
  )
}
