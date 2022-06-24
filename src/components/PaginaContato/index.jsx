import React from 'react';

import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationArrow,
} from 'react-icons/fa';
import { ContatoContainer, ContatoBox, ContatoContent } from './styled';

export default function Contato() {
  const iframeGoogle = {
    margin: '30px 0px',
    'box-shadow': '1px 1px 5px black',
    border: '0',
  };
  return (
    <>
      <div className="spacing"></div>
      <ContatoContainer>
        <h3 className="search-materias search-titulo">contato</h3>
        <ContatoBox>
          <h2>Sua interação é muito importante!</h2>
          <ContatoContent>
            <h3>Contato</h3>
            <p>
              <a href="tel:3438214488" target="_blank" rel="noreferrer">
                <FaPhone /> | Telefone: (34) 3821-4488
              </a>
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5534999474515"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                {' '}
                <FaWhatsapp /> | Whatsapp: (34) 9 9947-4515
              </p>
            </a>
            <h3>Email</h3>
            <a href="mailto:contato@ntvnet.com.br">
              <p>
                {' '}
                <FaEnvelope /> | contato@ntvnet.com.br
              </p>
            </a>
            <h3>Comercial</h3>
            <a href="mailto:comercial@ntvnet.com.br">
              <p>
                {' '}
                <FaEnvelope /> | comercial@ntvnet.com.br
              </p>
            </a>
            <h3>Endereço</h3>
            <p>
              <FaLocationArrow /> | Rua Major Gote, 1127 - 3º andar - Centro -
              CEP 38700-001 - Patos de Minas - MG
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15126.304030159461!2d-46.5148525!3d-18.5931444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ff6a9bed9f777f6!2sNTV%20-%20Nossa%20TV!5e0!3m2!1spt-BR!2sbr!4v1656090842881!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={iframeGoogle}
              className="iframe-google"
            ></iframe>
          </ContatoContent>
        </ContatoBox>
      </ContatoContainer>
    </>
  );
}
