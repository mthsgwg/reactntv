import React, { useEffect, useState } from 'react';
import secondApi from '../../services/secondApi';

import { Container, SectionMaterias, SectionSearch } from './styled';
import { FaSearch } from 'react-icons/fa';

export default function ContainerMaterias() {
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
      <div className="spacing" />
      <SectionSearch>
        <div className="search-materias">materias</div>
        <div className="search-materias"> redes sociais</div>
        <div className="search-button">
          <input type="text" placeholder="Buscar"></input>
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </SectionSearch>

      <SectionMaterias>
        {materias.map((materia) => {
          return (
            <div className="portrait top a-top" key={materias.url}>
              <img src={decodeURIComponent(materia.imagem)} />
              <p className="legenda"> {materia.titulo}</p>
            </div>
          );
        })}
      </SectionMaterias>
    </Container>
  );
}
