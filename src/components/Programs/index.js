import React from 'react';

import { ProgramsContainer } from './styled.js';

import trinta from '../../images/trinta.png';
import news from '../../images/news.png';
import guy from '../../images/guy.png';
import saude from '../../images/saude.png';
import ef from '../../images/EF.png';
import buteco from '../../images/buteco.png';
import opiniao from '../../images/opiniao.png';

export default function Programs() {
  return (
    <ProgramsContainer>
      <h2 className="program-title">programas</h2>
      <div className="first-row">
        <div className="first-row-title">
          <h3>INFORMATIVOS</h3>
          <div className="first-row-pgms">
            <div className="div-pgm">
              <div className="overlay-row">1</div>
              <img src={trinta} className="img-row" />
            </div>
            <div className="div-pgm">
              <div className="overlay-row">1</div>
              <img src={guy} className="img-row" />
            </div>
            <div className="div-pgm">
              <div className="overlay-row">1</div>
              <img src={news} className="img-row" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="second-row-title">
          <h3>ENTRETENIMENTO</h3>
        </div>
        <div className="second-row-pgms">
          <div className="div-pgm">
            <div className="overlay-row">1</div>
            <img src={saude} className="img-row" />
          </div>
          <div className="div-pgm">
            <div className="overlay-row">1</div>
            <img src={ef} className="img-row" />
          </div>
          <div className="div-pgm">
            <div className="overlay-row">1</div>
            <img src={buteco} className="img-row" />
          </div>
          <div className="div-pgm">
            <div className="overlay-row">1</div>
            <img src={opiniao} className="img-row" />
          </div>
        </div>
      </div>
    </ProgramsContainer>
  );
}
