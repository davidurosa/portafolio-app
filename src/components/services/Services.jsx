import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
const Services = () => {

  const [t] = useTranslation("global");

  return (
<section id='services'>
  <h5>{t("services.what")}</h5>
  <h2>{t("services.services")}</h2>
  <div className="container services__container">
    <article className="service">
      <div className="service__head">
        <h3>API REST</h3>
      </div>
      <ul className='service__list'>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Laravel</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>OMR</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Roles and permissions</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>http requests</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Main Modules</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>authentication</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>Web design and development</h3>
      </div>
      <ul className='service__list'>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Lading Page</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>One Page</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Blog</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Web applications</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>News</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>Mobile apps</h3>
      </div>
      <ul className='service__list'>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>API consumption</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Android</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>IOS</p>
        </li>

      </ul>
    </article>
  </div>
</section>  )
}

export default Services