import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from  '../../assets/MESIN.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>David Urosa</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>

        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Desplazarse hacia abajo</a>
      </div>

    </header>
  )
}

export default Header