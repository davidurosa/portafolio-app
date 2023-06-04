import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import './skill.css';
import { Content1 } from './Content1';
import { Content2 } from './Content2';
import { Content3 } from './Content3';
export const Skill = () => {

    const [t] = useTranslation("global");

    const [container1Open, setContainer1Open] = useState(true);
  const [container2Open, setContainer2Open] = useState(false);
  const [container3Open, setContainer3Open] = useState(false);

  const handleContainer1Click = () => {
    setContainer1Open(!container1Open);
    setContainer2Open(false);
    setContainer3Open(false);
  };

  const handleContainer2Click = () => {
    setContainer1Open(false);
    setContainer2Open(!container2Open);
    setContainer3Open(false);
  };

  const handleContainer3Click = () => {
    setContainer1Open(false);
    setContainer2Open(false);
    setContainer3Open(!container3Open);
  };
   
  

  return (
    <section id='skills' className='skills'>
         <h5>{t("experience.skill")}</h5>
         <h2>{t("experience.experience")}</h2>
         <div className='container skills__container'>
            <Content1 contentOpen={container1Open} handleClick={handleContainer1Click}/>
            <Content2 contentOpen={container2Open} handleClick={handleContainer2Click}/>
            <Content3 contentOpen={container3Open} handleClick={handleContainer3Click}/>
         </div>
    </section>
  )
}
