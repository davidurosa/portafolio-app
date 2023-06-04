import ME2 from "../../assets/ia2.png";
import React, { useState } from 'react';
/* import Typed from 'typed.js';
 */import './home.css'
import { TbLanguage } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import CV from '../../assets/CV David Urosa.pdf';
import { BsGithub, BsWhatsapp } from "react-icons/bs";
export const Home = () => {

    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState('es');

    const handleClick = () => {
      const newLanguage = language === 'es' ? 'en' : 'es';
      i18n.changeLanguage(newLanguage);
      setLanguage(newLanguage);
    };


  /*   const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['professional game developer'],
        typeSpeed: 100,
        backDelay:1000,
        loop:true,
        backSpeed: 100,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); */


  return (
    <section className="home" id="home">
        <div className="container home__container">
            <div className="home__description">
                <h3>{t("home.greeting")}</h3>
                <h1><span>David</span> Urosa</h1>
                <h3>{t("home.soy")}</h3>
                <div className="btn-home">   
                <a href={CV} download  className="btn">
                {t("home.CV")}
                </a>
                </div>
                
            </div>
            <div className="home__me">
                    <i></i>
                <div className="home__me-image">
                    <img src={ME2}  alt="me"/> 
                </div>
            </div>

            <div className='panel'>
            <button onClick={handleClick} ><TbLanguage/></button>
            <a href="https://twitter.com/urosaclaw"  target="_blank" rel="noreferrer"><BsWhatsapp/></a>
            <a href="https://github.com/davidurosa" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/david-leonardo-urosa-9a9463144/"  target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
            <a href="https://www.facebook.com/david.urosa.7/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
         </div>
        </div>
    </section>
  )
}
