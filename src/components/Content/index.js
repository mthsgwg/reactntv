import React from 'react';
import { Container } from './styled';
import { SecondContainer } from './styled';
import Materias from '../Materias';
import Programs from '../Programs';
import CarouselBootstrap from '../Carousel/index';
import Timeline from '../Timeline';
import Contact from '../Contact';

import gifTv from '../../images/ntvpatos.gif';
import gifNossa from '../../images/nossafm1.gif';
export default function Content() {
  return (
    <>
      <Container>
        <section className="first-section">
          <iframe
            src="https://player.logicahost.com.br/player.php?player=676"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
          ></iframe>
          <h1 className="text-pgm">
            Assista <span className="live"> ao vivo </span>a programação da NTV
          </h1>
        </section>
      </Container>
      <SecondContainer>
        <section className="second-section">
          <div className="head-scnd-page">
            <div className="box-assista">
              <div className="assista-hoje">
                <h2>
                  <span className="hoje">hoje</span> na{' '}
                  <span className="ntv">ntv</span>
                </h2>
              </div>
              <CarouselBootstrap />
            </div>
            <div className="box-gif">
              <div className="assista-hoje">
                <h4>confira também</h4>
              </div>
              <img src={gifTv} />
              <img src={gifNossa} />
            </div>
          </div>
        </section>
      </SecondContainer>
      <Materias />
      <Programs />
      <Timeline />
      <Contact />
    </>
  );
}
