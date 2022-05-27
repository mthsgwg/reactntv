import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 40%;
  min-height: 40vh;
  background-color: #2e2e2e;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .contato {
    background-color: #e6e2d3;
    margin: 40px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 75%;
  }

  .contato h3 {
    font-size: 2em;
    color: white;
    text-shadow: 4px 4px 10px black;
    text-align: center;
    margin-bottom: 20px;
  }

  #form-contato {
    width: min-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .form-nome {
    width: 143px;
    margin: 5px;
    height: 20px;
  }

  .form-mensagem {
    width: 450px;
    height: 100px;
    margin: 5px;
  }

  #form-contato button {
    text-align: center;
    margin: 5px;
    width: 450px;
  }

  .contato-contato {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .contato-redes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .contato-redes p {
    color: #f2f2f2;
    font-weight: 700;
    font-size: 1.5em;
    padding: 10px;
  }
  .contato-redes a:hover {
    color: darkblue;
  }

  .container-redes {
    background-color: rgba(0, 0, 0, 0.4);
    height: fit-content;
    width: fit-content;
  }

  a {
    text-decoration: none;
    color: #f2f2f2;
  }
`;
