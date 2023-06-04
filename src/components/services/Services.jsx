import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";
const Services = () => {
  const [t] = useTranslation("global");

  return (
    <section id="services">
      <h5>{t("services.what")}</h5>
      <h2>{t("services.services")}</h2>
      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>web system</h3>
          </div>
          <hr />

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>payment gateway</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>One Page</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Blog</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Web applications</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Ecommerce</p>
            </li>

            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Custom system</p>
            </li>

            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Api</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>information system</p>
            </li>
          </ul>
          <div className="service__buttom">
            <button className="btn btn-primary">Contact</button>
          </div>
        </article>
      
        <article className="service">
          <div className="service__head">
            <h3>Web design and development</h3>
          </div>
          <hr />
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>design</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>blog</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>payment gateway</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>hosting and domain</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Home</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Contact</p>
            </li>

            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>About</p>
            </li>
          </ul>
          <div className="service__buttom">
            <button className="btn btn-primary">Contact</button>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile apps</h3>
          </div>
          <hr />
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>API consumption</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Android</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>IOS</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>design</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Custom App</p>
            </li>
          </ul>
          <div className="service__buttom">
            <button className="btn btn-primary">Contact</button>
          </div>
        </article>

        

      
      </div>
    </section>
  );
};

export default Services;
