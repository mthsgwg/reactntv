import styled from 'styled-components';

export const ContainerMateria = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #034f84;
  flex-wrap: wrap;
`;

export const WrapperMateria = styled.section`
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e2d3;
  border-radius: 5px;
  padding: 10px;
  margin-top: 2%;

  .grid-programa {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
  }

  .player {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .description-container {
    background-color: rgba(255, 255, 255, 0.3);
    height: fit-content;
  }

  .description {
    margin-top: 20px;
    white-space: pre-line;
  }
`;

export const WrapperOldMaterias = styled.section`
  width: 80%;
  height: 50%;
  background-color: #e6e2d3;
  margin: 30px;
  display: flex;
  justify-content: space-around;

  .container-materia {
    background-color: #f2f2f2;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-materia p {
    text-align: center;
  }

  .link-older-content {
    width: 100%;
    text-decoration: none;
  }
`;
