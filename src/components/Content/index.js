import React from 'react';
import { Container } from './styled';
import { SecondContainer } from './styled';
import ConteudoMaterias from '../ConteudoMaterias';
import Programs from '../Programs';
import CarouselBootstrap from '../Carousel/index';
import Timeline from '../Timeline';
import gifNossa from '../../images/banner-nossafm.png';
import gifTv from '../../images/banner-patosja.png';

export default function Content() {
  return (
    <>
      <div className="spacing" />
      <Container>
        <section className="first-section">
          <iframe
            src="https://player.logicahost.com.br/player.php?player=676"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            className="player"
          ></iframe>
          <h1 className="text-pgm">
            Assista <span className="live-span"> ao vivo </span>a programação da
            NTV
          </h1>
        </section>
      </Container>
      <SecondContainer>
        <div className="head-scnd-page">
          <div className="box-assista">
            <div className="assista-hoje">
              <span className="hoje">hoje</span> na{' '}
              <span className="ntv">ntv</span>
            </div>
            <CarouselBootstrap />
          </div>
          <div className="box-gif">
            <div className="assista-hoje">
              <span className="ntv">confira também</span>
            </div>
            <a
              href="https://patosja.com.br/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src={gifTv} />
            </a>
            <a
              href="https://www.nossafm.com/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img src={gifNossa} />
            </a>
          </div>
        </div>
      </SecondContainer>
      <ConteudoMaterias />
      <Programs />
      <Timeline />
    </>
  );
}
