import { BsBraces } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Content1 = ({ contentOpen, handleClick }) => {

  const [t] = useTranslation("global");



  return (
    <div  className={`skills__content ${contentOpen ? 'skills__open' : 'skills__close'}`}
    onClick={handleClick}
  >
      <div className="skills__header">
        <BsBraces className="skills__icon" />
        <div>
          <h3 className="skills__title">{t("experience.frontend")}</h3>
          <span className="skills__sub-title">{t("experience.year-frontend")}</span>
        </div>
        <FaAngleDown className="skills__arrows" />
      </div>

      <div className="skills__list">
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Html</h4>
            <span className="skills__number">100%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__html"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Css</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__css"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">JS</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__js"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">ReactJS</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__react"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Bootstrap</h4>
            <span className="skills__number">95%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__bootstrap"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Sass</h4>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__sass"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">JQuery</h4>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__jquery"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Vue</h4>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__vue"></span>
          </div>
        </div>    

      </div>
    </div>
  );
};
