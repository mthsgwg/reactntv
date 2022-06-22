import React from 'react';

import { ContatoContainer, ContatoBox, ContatoContent } from './styled';

export default function Contato() {
  return (
    <>
      <div className="spacing"></div>
      <ContatoContainer>
        <ContatoBox>
          <h2>Sua interação é muito importante!</h2>
          <ContatoContent>
            <h3>Contato</h3>
            <p>Telefone: (34) 3821-4488</p>
            <p>Whatsapp: (34) 9 9947-4515</p>
            <h3>Email</h3>
            <p>contato@ntvnet.com.br</p>
            <h3>Comercial</h3>
            <p>comercial@ntvnet.com.br</p>
            <h3>Endereço</h3>
            <p>
              Rua Major Gote, 1127 - 3º andar - Centro - CEP 38700-001 - Patos
              de Minas - MG
            </p>
          </ContatoContent>
        </ContatoBox>
      </ContatoContainer>
    </>
  );
}
