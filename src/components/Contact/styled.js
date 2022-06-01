import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 40%;

  background-color: #2e2e2e;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .contato {
    background-color: #e6e2d3;
    margin: 40px auto;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: fit-content;
  }

  .contato h3 {
    font-size: 2em;
    color: white;
    text-shadow: 4px 4px 10px black;
    text-align: center;
    margin-bottom: 20px;
  }

  .form-nome {
    width: 33.33%;
  }

  #form-contato {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }

  .top-inputs {
    width: 100%;
    height: 20px;
    margin-bottom: 1%;
  }

  .form-mensagem {
    width: 100%;
    height: 100px;
    text-align: start;
  }

  #form-contato button {
    text-align: center;
    width: 100%;
  }

  .contato-contato,
  .contato-redes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .contato-redes p {
    color: #f2f2f2;
    font-weight: 700;
    font-size: 2rem;
    padding: 5px;
    text-align: center;
  }
  .contato-redes a:hover {
    color: darkblue;
  }

  .container-redes {
    background-color: rgba(0, 0, 0, 0.4);
    height: 80%;
    width: fit-content;
  }

  a {
    text-decoration: none;
    color: #f2f2f2;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 0fr 1fr 0fr;
    }

    .contato {
      grid-template-columns: 1fr;
    }

    .contato-redes p {
      color: #f2f2f2;
      font-weight: 700;
      font-size: 1rem;
      padding: 5px;
      text-align: center;
    }

    .form-nome {
      width: 33.33%;
      height: 20px;
    }

    .form-mensagem {
      width: 100%;
      height: 50px;
    }

    #form-contato button {
      text-align: center;
      width: 100%;
    }
  }
`;
