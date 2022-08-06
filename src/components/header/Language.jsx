import React from 'react'
import { useTranslation } from 'react-i18next';
import { TbLanguage } from 'react-icons/tb'

export const Language = () => {
    const [t, i18n] = useTranslation("global");

  return (
    <div className='language'>
            <TbLanguage/> <p>{t("header.language")}</p>
            <button onClick={() => i18n.changeLanguage("es")} className='btn-small '>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}  className='btn-small '>EN</button>
        </div>
  )
}
