/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import { getTime } from './script';

import { TimelineStyled, TimelineContainer } from './styled';

export default function Timeline() {
  const [desc, setDesc] = useState();

  const paddingTop = {
    'padding': '30px',
    'backgroundColor': '#034f84'
  }

  useEffect(() => {
    const dia = new Date();
    const hoje = dia.getDay();

    if (hoje === 2)
      return setDesc('18:00 Mais Saúde');
    if (hoje === 3)
      return setDesc('18:00 Espaço Feminino');
    if (hoje === 4)
      return setDesc('18:30 Buteco da Nossa');
    if (hoje === 5)
      return setDesc('18:30 Opinião Regional');

    return setDesc('18:00')

  }, []);

  return (
    <TimelineContainer style={paddingTop}>
      <TimelineStyled>
        <ProgressBar percent={getTime()}>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>Rede Minas</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>11:30 {' '} 30 Minutos</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>12:00 {' '} Guy Boaventura</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>13:30 {' '} Hora Celeste</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>13:45 {' '} Padre Manzotti</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>14:15 {' '} Rede Minas</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  {desc ? (<p>{desc}</p>) : (<> </>)}
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>19:00 {' '} Ntv News</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>20:00 {' '} Hora Celeste</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>20:15 {' '} Reprise  18:00</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>21:15 {' '} Reprise  News</p>
                </div>
              </ div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div className='steps'>
                <div
                  className={`indexedStep ${accomplished ? 'accomplished' : null
                    }`}
                >
                  <p>22:00 {' '} Rede Minas</p>
                </div>
              </ div>
            )}
          </Step>
        </ProgressBar>
      </TimelineStyled>
    </TimelineContainer>
  );
}
