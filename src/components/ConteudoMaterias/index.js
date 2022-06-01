import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, ContainerVideos, ListaVideos } from './styled';
import first from '../../images/materias/1.jpg';
import second from '../../images/materias/2.jpg';
import third from '../../images/materias/3.jpg';
/*
import fourth from '../../images/materias/4.jpg';
import fifth from '../../images/materias/5.jpg';
import sixth from '../../images/materias/6.jpg';
import seventh from '../../images/materias/7.jpg';
*/
export default function ConteudoMaterias() {
  const red = {
    background: 'white',
  };
  const blue = {
    background: 'white',
  };
  const yellow = {
    background: 'white',
  };
  return (
    <Container>
      <div className="materias">reportágens</div>
      <div className="materias-videos">
        <ContainerVideos>
          <section className="videos">
            <div className="top">
              <div className="a-top" style={red}>
                <div className="placeholder-video">
                  <img src={first} className="video-thumb" />
                  <p className="legenda">
                    Casos de covid disparam em Patos de Minas
                  </p>
                </div>
              </div>
              <div className="a-top" style={blue}>
                <div className="placeholder-video">
                  <img src={second} />
                  <p className="legenda">
                    Moradores pedem fazem denúncia de mau-cheiro no bairro
                    quebec
                  </p>
                </div>
              </div>
              <div className="a-top" style={yellow}>
                <div className="placeholder-video">
                  <img src={third} />
                  <p className="legenda">
                    Encontro de carros esportivos é realizado nessa sexta-feira
                    em patos de minas
                  </p>
                </div>
              </div>
            </div>
            <div className="top">
              <div className="a-top" style={red}>
                <div className="placeholder-video">
                  <img src={first} className="video-thumb" />
                  <p className="legenda">
                    Casos de covid disparam em Patos de Minas
                  </p>
                </div>
              </div>
              <div className="a-top" style={blue}>
                <div className="placeholder-video">
                  <img src={second} />
                  <p className="legenda">
                    Moradores pedem fazem denúncia de mau-cheiro no bairro
                    quebec
                  </p>
                </div>
              </div>
              <div className="a-top" style={yellow}>
                <div className="placeholder-video">
                  <img src={third} />
                  <p className="legenda">
                    Encontro de carros esportivos é realizado nessa sexta-feira
                    em patos de minas
                  </p>
                </div>
              </div>
            </div>
            <div className="top">
              <div className="a-top" style={red}>
                <div className="placeholder-video">
                  <img src={first} className="video-thumb" />
                  <p className="legenda">
                    Casos de covid disparam em Patos de Minas
                  </p>
                </div>
              </div>
              <div className="a-top" style={blue}>
                <div className="placeholder-video">
                  <img src={second} />
                  <p className="legenda">
                    Moradores pedem fazem denúncia de mau-cheiro no bairro
                    quebec
                  </p>
                </div>
              </div>
              <div className="a-top" style={yellow}>
                <div className="placeholder-video">
                  <img src={third} />
                  <p className="legenda">
                    Encontro de carros esportivos é realizado nessa sexta-feira
                    em patos de minas
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="older-content">
            <section className="container-older-content">
              <div className="search-box">
                <input type="text" placeholder="Buscar"></input>
                <button type="submit">
                  <FaSearch />
                </button>
              </div>
              <p className="title-older-content">Veja +!</p>
              <ListaVideos>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais{' '}
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="video-list">
                  <a href="s">
                    Coleta de lixo no feriado será feita apenas na região
                    central e hospitais
                  </a>
                </div>
                <div className="mais-materias">
                  <a href="/">mais matérias</a>
                </div>
              </ListaVideos>
            </section>
          </div>
        </ContainerVideos>
      </div>
    </Container>
  );
}
