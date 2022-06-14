import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import './index.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import news from '../../images/news.png';
import trinta from '../../images/trinta.png';
import guy from '../../images/guy.png';
import saude from '../../images/saude.png';
import ef from '../../images/EF.png';
import buteco from '../../images/buteco.png';
import opiniao from '../../images/opiniao.png';

export default function CarouselBootstrap() {
  const [img, setImg] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const dia = new Date();
    const hoje = dia.getDay();

    if (hoje === 2)
      return setImg(saude), setDesc('Programa Mais Saúde de 18:00 às 19:00');
    if (hoje === 3)
      return setImg(ef), setDesc('Programa Espaço Feminino de 18:00 às 19:00');
    if (hoje === 4)
      return (
        setImg(buteco), setDesc('Programa Buteco da nossa de 18:30 às 19:00')
      );
    if (hoje === 5)
      return (
        setImg(opiniao), setDesc('Programa Opinião Regional de 18:30 às 19:00')
      );
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        className="carousel-container"
        navigation={{
          navigation: {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
          },
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={trinta} />
          </div>
          <p className="legend">Programa 30 minutos de 11:30 ao 12:00</p>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <img src={guy} className="logo-carousel" />
          </div>
          <p className="legend">Programa Guy Boaventura de 12:00 às 13:30</p>
        </SwiperSlide>

        {img ? (
          <SwiperSlide>
            <div className="swiper-slide">
              <img src={img} className="logo-carousel" />
              <p className="legend">{desc}</p>
            </div>
          </SwiperSlide>
        ) : (
          <></>
        )}
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={news} className="logo-carousel" />
            <p className="legend">NTV News de 19:00 às 20:00</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
