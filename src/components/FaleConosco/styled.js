import styled from 'styled-components';

export const ContainerContato = styled.section`
  width: 100%;
  height: 100%;
  min-height: 93vh;
  background: linear-gradient(
    90deg,
    rgba(27, 155, 207, 1) 0%,
    rgba(3, 79, 132, 1) 51%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContatoContent = styled.div`
  width: 600px;
  max-height: 90%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 15px;
  color: #f2f2f2;

  & form,
  & ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
  }

  & ul li input,
  & ul li label,
  li textarea {
    padding: 10px;
    width: 100%;
    margin-bottom: 5%;
    margin-bottom: 3%;
  }

  textarea {
    height: 90px;
    max-height: 100px;
  }

  iframe {
    width: auto;
  }

  .form-button {
    width: 30%;
    margin: 0 auto;
  }
`;
