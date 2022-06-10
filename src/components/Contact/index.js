import React from 'react';

import { ContactContainer } from './styled';

export default function Contact() {
  return (
    <ContactContainer id="contato">
      <div className="container-contact">
        <div className="contato">
          <div className="contato-contato">
            <h3>contate-nos</h3>
            <div>
              <form id="form-contato">
                <div className="top-inputs">
                  <input
                    type={'text'}
                    placeholder="Seu nome"
                    className="form-nome"
                    required
                  />
                  <input
                    type={'email'}
                    placeholder="Seu email"
                    required
                    className="form-nome"
                  />
                  <input
                    type={'tel'}
                    placeholder="Seu telefone"
                    required
                    className="form-nome"
                  />
                </div>
                <input
                  type={'text'}
                  placeholder="Sua mensagem"
                  className="form-mensagem"
                  required
                />

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          <div className="contato-redes">
            <h3>nossas redes</h3>
            <div className="container-redes">
              <p>
                <a href="https://facebook.com/ntvpatos">facebook </a>
              </p>
              <p>
                <a href="https://www.youtube.com/channel/UCe-9s6rqJUwLTJ3Q6-SldLA?app=desktop">
                  youtube
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/ntvpatosdeminas/?hl=pt">
                  instagram
                </a>
              </p>
              <p>
                <a href="https://api.whatsapp.com/send?phone=5534999474515&text=Ol%C3%A1%20NTV!">
                  whatsapp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
}
