import styled from 'styled-components';

export const ContainerMateria = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #034f84;
  flex-wrap: wrap;

  .list-group-item:hover,
  .list-group-item-box:hover {
    cursor: pointer;
  }

  .container-second-api {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .background-color-right {
    background-color: #e6e2d3;
    border-radius: 5px;
    padding: 10px;
  }
`;

export const WrapperMateria = styled.section`
  width: 80%;
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
    width: 90%;
    height: max-content;
  }

  .description-container {
    background-color: rgba(255, 255, 255, 0.3);
    height: fit-content;
    min-height: 40vh;
  }

  .description {
    margin-top: 20px;
    white-space: pre-line;
    font-size: 1.2em;
  }

  @media (max-width: 1200px) {
    .grid-programa {
      grid-template-columns: 1fr;
    }
    .description-container {
      height: 100%;
      width: 100%;
      overflow-y: auto;
    }
  }

  @media (max-width: 900px) {
    .grid-programa {
      grid-template-columns: 1fr;
    }

    .description {
      font-size: 1em;
    }
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
