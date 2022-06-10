import React from 'react';

import { ContainerContato, ContatoContent } from './styled';

export default function ContatoComponent() {
  return (
    <>
      <div className="spacing"></div>
      <ContainerContato>
        <ContatoContent>
          <form>
            <ul>
              <li>
                <label style={{ 'font-weight': 'bold' }}>nome</label>
                <br />
                <input
                  type={'text'}
                  placeholder="Seu nome"
                  className="form-nome"
                  required
                />
              </li>
              <li>
                <label style={{ 'font-weight': 'bold' }}>e-mail</label>
                <br />
                <input
                  type={'e-mail'}
                  placeholder="Seu e-mail"
                  className="form-nome"
                  required
                />
              </li>
              <li>
                <label style={{ 'font-weight': 'bold' }}>telefone</label>
                <br />
                <input
                  type={'tel'}
                  placeholder="Seu telefone : Ex: (34) 9 9947-4515"
                  className="form-nome"
                  required
                />
              </li>
              <li>
                <label style={{ 'font-weight': 'bold' }}>Sua mensagem</label>
                <br />
                <textarea name="message" className="form-nome" />
              </li>
            </ul>
            <input type={'submit'} value="enviar" className="form-button" />
            <iframe src="https://embed.lottiefiles.com/animation/85713"></iframe>
          </form>
        </ContatoContent>
      </ContainerContato>
    </>
  );
}
