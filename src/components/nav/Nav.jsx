/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageRoundedDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BsFillBagFill} from 'react-icons/bs'





const Nav = () => {

  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setactiveNav('#')}  className={activeNav==='#'?'active':''}><AiOutlineHome/> </a>
      <a href="#about" onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/> </a>
      <a href="#experience" onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/> </a>
      <a href="#services" onClick={()=>setactiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/> </a>
      <a href="#portafolio" onClick={()=>setactiveNav('#portafolio')} className={activeNav==='#portafolio'?'active':''}><BsFillBagFill/> </a>
      <a href="#contact" onClick={()=>setactiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageRoundedDetail/> </a>
    </nav>
  )
}

export default Nav