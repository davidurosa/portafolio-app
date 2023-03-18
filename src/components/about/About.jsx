import React from "react";
import "./about.css";
import ME from "../../assets/david-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <section id="about">
      <h5>{t("about.know")}</h5>
      <h2>{t("about.me")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("about.experience")}</h5>
              <small>3+ {t("about.year")}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("about.projects")}</h5>
              <small>30+</small>
            </article>
            <article className="about__card">
              <FiUserCheck className="about__icon" />
              <h5>{t("about.clients")}</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
           {t("about.description")}
          </p>
          <a href="#contact" className="btn btn-primary">
            {t("about.contact")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
