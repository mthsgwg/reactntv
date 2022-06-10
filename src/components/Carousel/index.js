import React from 'react';
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

import buteco from '../../images/buteco.png';
import news from '../../images/news.png';
import trinta from '../../images/trinta.png';

export default function CarouselBootstrap() {
  return (
    <>
      {/* <section className="carousel-container">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={buteco} />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
          <div>
            <img src={news} className="logo-carousel" />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
          <div>
            <img src={trinta} className="logo-carousel" />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
          <div>
            <img src={trinta} className="logo-carousel" />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
        </Carousel>
      </section> */}
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
            <img src={buteco} />
          </div>
          <p className="legend">Buteco da nossa 18:00 às 19:00</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={news} className="logo-carousel" />
          </div>
          <p className="legend">Buteco da nossa 18:00 às 19:00</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={trinta} className="logo-carousel" />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <img src={trinta} className="logo-carousel" />
            <p className="legend">Buteco da nossa 18:00 às 19:00</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
