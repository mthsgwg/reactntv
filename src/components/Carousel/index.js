import React from 'react';

import './index.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import buteco from '../../images/buteco.png';
import news from '../../images/news.png';
import trinta from '../../images/trinta.png';

export default function CarouselBootstrap() {
  return (
    <section className="carousel-container">
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
    </section>
  );
}
