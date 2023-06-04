import React from 'react'
import { useTranslation } from 'react-i18next';
import CV from '../../assets/CV David Urosa.pdf'
const CTA = () => {

  const [t] = useTranslation("global");

  return (
    
    <div className="cta">
        <a href={CV} download className='btn'>{t("header.CV")}</a>
        <a href="#contact" className='btn btn-primary'>{t("header.contact")}</a>
    </div>
  )
}

export default CTA