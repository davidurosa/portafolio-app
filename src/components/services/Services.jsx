import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
<section id='services'>
  <h5>Que ofrezco</h5>
  <h2>Servicios</h2>
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
          <p>Roles y permisos</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Solicitudes HTTP</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Laravel</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Modulos Principales</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>Diseño y desarrollo web</h3>
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
          <p>Aplicaciones web</p>
        </li>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Noticias</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>Aplicaciones Moviles</h3>
      </div>
      <ul className='service__list'>
        <li>
          <AiOutlineCheck className='service__list-icon'/>
          <p>Consumo de API</p>
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