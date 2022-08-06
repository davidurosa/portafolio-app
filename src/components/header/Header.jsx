import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/MESIN.png";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";
import { Language } from "./Language";
const Header = () => {
  const [t] = useTranslation("global");

  return (
    <header>
      <div className="container header__container">
        <h5>{t("header.greeting")}</h5>
        <h1>David Urosa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Language/>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {t("header.scroll")}
        </a>
      </div>
    </header>
  );
};

export default Header;
