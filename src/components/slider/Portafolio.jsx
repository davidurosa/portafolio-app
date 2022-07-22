import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/peliculas.png' 
import IMG2 from '../../assets/aplicacion.jpeg' 
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {imagen:IMG1,nombre:'Peliculas',demo:'https://github.com',git:'https://github.com' },
  {imagen:IMG2,nombre:'Apicacion telefono',demo:'https://githubsa.com',git:'https://githubaas.com' },
  {imagen:IMG1,nombre:'Peliculas3',demo:'https://githubs.com',git:'https://githubaa.com' }
]



const Portafolio = () => {
  return (
<section id='portafolio'> 
<h5>mi trabajo reciente</h5>
<h2>portafolio</h2>
<Swiper className="container portafolio__container"
 modules={[Navigation, Pagination, A11y]}
 spaceBetween={50}
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
 >
{
  data.map(({imagen,nombre,demo,git},index)=>{
    return(
      <SwiperSlide  key={index} className="portafolio__item">
    <div className="portafolio__item-image">
      <img src={imagen} alt="imagen de peliculas" />
    </div>
      <h3>{nombre}</h3>
      <div className='portafolio__item-cta'>
      <a className='btn btn-primary' href={demo}>Ver</a>
      <a className='btn' href={git}>Github</a>
      </div>
  </SwiperSlide>
    )
  })
}
</Swiper>
</section>  )
}

export default Portafolio