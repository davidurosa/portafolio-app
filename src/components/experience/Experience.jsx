import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const Experience = () => {

  const [t] = useTranslation("global");

  return (
    <section id="experience">
      <h5>{t("experience.skill")}</h5>
      <h2>{t("experience.experience")}</h2>
      <div className="container experience__container">
        <div className="experiencie__frontend">
          <h3>Frontend developmen</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Sass</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JS</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JQuery</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
           
           
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Vue</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiencie__backend">
          <h3>Backend developmen</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Laravel</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Node</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>API </h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>GIT</h4>
                <small className="text-light">{t("experience.ex")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
