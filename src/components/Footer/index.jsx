import React from 'react';
import {
  FooterContainer,
  FooterImageContainer,
  ImagesContainer,
} from './styled';

import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';

export default function Footer() {
  return (
    <FooterContainer id="faleconosco">
      <h1> NTV </h1>
      <ImagesContainer>
        <FooterImageContainer>
          <a
            href="https://www.facebook.com/ntvpatos"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={facebook} />
          </a>
        </FooterImageContainer>
        <FooterImageContainer>
          <a
            href="https://www.instagram.com/ntvpatosdeminas/?hl=pt"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={instagram} />
          </a>
        </FooterImageContainer>
        <FooterImageContainer>
          <a
            href="https://mobile.twitter.com/ntvnet"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={twitter} />
          </a>
        </FooterImageContainer>
        <FooterImageContainer>
          <a
            href="https://www.youtube.com/channel/UCe-9s6rqJUwLTJ3Q6-SldLA"
            target={'_blank'}
            rel="noreferrer"
          >
            <img src={youtube} />
          </a>
        </FooterImageContainer>
      </ImagesContainer>
      <p>
        Rua Major Gote, 1127 - 3º andar - Centro - CEP 38700-001 - Patos de
        Minas-MG - Telefone: (34) 3821-4488
      </p>
      <p>Todos os direitos reservados - NTV 2022®</p>
    </FooterContainer>
  );
}
