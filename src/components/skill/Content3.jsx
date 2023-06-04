import { AiFillFormatPainter } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Content3 = ({ contentOpen, handleClick }) => {

 
  const [t] = useTranslation("global");

  return (
    <div  className={`skills__content ${contentOpen ? 'skills__open' : 'skills__close'}`}
    onClick={handleClick}
  >
      <div className="skills__header">
      <AiFillFormatPainter className='skills__icon'/>

        <div>
        <h3 className="skills__title">{t("experience.designer")}</h3>
          <span className="skills__sub-title">{t("experience.year-designer")}</span>
        </div>
        <FaAngleDown className="skills__arrows" />
      </div>

      <div className="skills__list">
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Figman</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__figman"></span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h4 className="skills__name">Skech</h4>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__skech"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
