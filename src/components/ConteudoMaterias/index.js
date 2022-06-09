import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import secondApi from '../../services/secondApi';
import { Link } from 'react-router-dom';

import { Container, ContainerVideos, ListaVideos } from './styled';

export default function ConteudoMaterias() {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await secondApi.get();
      const map = response.data;
      const result = Object.values(map);
      setMaterias(result);
    })();
  }, []);

  return (
    <Container>
      <div className="materias-videos">
        <ContainerVideos>
          <section className="videos">
            <div className="top">
              {materias.slice(0, 9).map((materia) => {
                return (
                  <div key={materia.url} className="a-top">
                    <Link
                      to={'/materias'}
                      state={{ materias: materia }}
                      className="no-decorations"
                    >
                      <img
                        src={decodeURIComponent(materia.imagem)}
                        className="video-thumb"
                      />
                      <p className="legenda">{materia.titulo}</p>
                    </Link>
                  </div>
                );
              })}
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
                {materias.slice(9, 17).map((materia) => {
                  return (
                    <div className="video-list" key={materia.url}>
                      <Link
                        to={'/materias'}
                        state={{ materias: materia }}
                        className="no-decorations"
                      >
                        <p>{materia.titulo}</p>
                      </Link>
                    </div>
                  );
                })}
                <div className="mais-materias">
                  <a href="/materias">mais matérias</a>
                </div>
              </ListaVideos>
            </section>
          </div>
        </ContainerVideos>
      </div>
    </Container>
  );
}
