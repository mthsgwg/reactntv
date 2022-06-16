/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import secondApi from '../../services/secondApi';

import { Container, SectionMaterias, SectionSearch } from './styled';

// eslint-disable-next-line react/prop-types
export default function ContainerMaterias({ materiaProp }) {
  const [materias, setMaterias] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState(materiaProp);

  useEffect(() => {
    (async () => {
      const response = await secondApi.get();
      const map = response.data;
      const result = Object.values(map);
      setMaterias(result);
    })();
  }, []);

  function handleClick(materia) {
    setSelectedMateria(materia);
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <div className="spacing" />
      <SectionSearch>
        <div className="search-materias">últimas materias</div>
      </SectionSearch>
      {selectedMateria ? (
        <section className="top-materia" id="top-html">
          <div className="grid-programa">
            <iframe
              width="100%"
              height="100%"
              src={decodeURIComponent(selectedMateria.youtube)}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="player"
            />
            <div className="description-container">
              <h1 className="text-center text-dark fw-bold">
                {selectedMateria.titulo}
              </h1>
            </div>
          </div>
        </section>
      ) : null}
      <SectionMaterias>
        {materias.map((materia) => {
          return (
            <div
              className="portrait "
              key={materia.titulo}
              onClick={() => handleClick(materia)}
            >
              <img
                src={decodeURIComponent(materia.imagem)}
                className="img-materias"
              />
              <p className="legenda"> {materia.titulo}</p>
            </div>
          );
        })}
      </SectionMaterias>
      <SectionSearch>
        <div className="search-materias">
          Quer ver mais? acesse o nosso{' '}
          <a
            href="https://www.youtube.com/channel/UCe-9s6rqJUwLTJ3Q6-SldLA"
            target={'_blank'}
            rel="noreferrer"
          >
            youtube
          </a>
        </div>
      </SectionSearch>
    </Container>
  );
}
