/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

import { ContainerContato, ContatoContent } from './styled';

export default function FaleComponent() {
  const [disabled, setDisabled] = useState(false);
  const form = useRef();

  function handleClick(e) {
    e.preventDefault();
    sendEmail();
    setDisabled(true);
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_muzvrie',
        'template_v5m8ert',
        form.current,
        'DO3CDASPUX-L4A28K',
      )
      .then(
        (result) => {
          toast.success(result.text + ' Mensagem enviada com sucesso');
        },
        (error) => {
          toast.error(
            error.text + ' Falha ao enviar mensagem, contate o suporte.',
          );
        },
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="spacing"></div>
      <ContainerContato>
        <h3 className="search-materias search-titulo">fale conosco</h3>
        <ContatoContent>
          <form ref={form} onSubmit={handleClick}>
            <ul>
              <li>
                <label style={{ fontWeight: 'bold' }}>nome</label>
                <br />
                <input
                  type={'text'}
                  placeholder="Seu nome"
                  className="form-nome"
                  name="from_name"
                  required
                />
              </li>
              <li>
                <label style={{ fontWeight: 'bold' }}>e-mail</label>
                <br />
                <input
                  type={'e-mail'}
                  placeholder="Seu e-mail"
                  className="form_phone"
                  name="from_email"
                  required
                />
              </li>
              <li>
                <label style={{ fontWeight: 'bold' }}>telefone</label>
                <br />
                <input
                  type={'num'}
                  placeholder="Seu telefone : Ex: (34) 9 9947-4515"
                  className="form-nome"
                  name="from_phone"
                  required
                />
              </li>
              <li>
                <label style={{ fontWeight: 'bold' }}>mensagem</label>
                <br />
                <textarea
                  name="message"
                  className="form-nome"
                  placeholder="Sua mensagem"
                />
              </li>
            </ul>
            <input
              type={'submit'}
              value={disabled ? 'enviado!' : 'enviar'}
              className="form-button pagination-button"
              disabled={disabled}
            />
            <iframe src="https://embed.lottiefiles.com/animation/85713"></iframe>
          </form>
        </ContatoContent>
      </ContainerContato>
    </>
  );
}
