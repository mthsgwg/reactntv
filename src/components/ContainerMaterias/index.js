import React from 'react';

import { Container, SectionMaterias, SectionSearch } from './styled';

import first from '../../images/materias/1.jpg';
import { FaSearch } from 'react-icons/fa';

export default function ContainerMaterias() {
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
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet </p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
        <div className="portrait top a-top">
          <img src={first} />
          <p className="legenda"> lorem ipsum dolor sit amoet</p>
        </div>
      </SectionMaterias>
    </Container>
  );
}
