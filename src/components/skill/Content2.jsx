import { FaAngleDown, FaSwatchbook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Content2 = ({ contentOpen, handleClick }) => {

  const [t] = useTranslation("global");

  return (
    <div  className={`skills__content ${contentOpen ? 'skills__open' : 'skills__close'}`}
    onClick={handleClick}
  >
      <div className="skills__header">
      <FaSwatchbook className='skills__icon'/>

        <div>
        <h3 className="skills__title">{t("experience.backend")}</h3>
          <span className="skills__sub-title">{t("experience.year-backend")}</span>
        </div>
        <FaAngleDown className="skills__arrows" />
      </div>

      <div className="skills__list">
      <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Laravel</h4>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__laravel"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">PHP</h4>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__php"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Node</h4>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__node"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">MYSQL</h4>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__mysql"></span>
          </div>
        </div>

       

        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Api</h4>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__api"></span>
          </div>
        </div>

       <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Git</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__git"></span>
          </div>
        </div> 
      </div>
    </div>
  );
};
