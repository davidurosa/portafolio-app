import React from 'react'
import CV from '../../assets/CV David Urosa.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contacto</a>
    </div>
  )
}

export default CTA