import styled from 'styled-components';

export const ContainerMateria = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(3, 79, 132);
  background: linear-gradient(
    90deg,
    rgba(3, 79, 132, 1) 56%,
    rgba(27, 155, 207, 1) 100%
  );
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
    margin-top: 20px;
  }

  .materias-antigas {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .placeholder-programas {
    background-color: #f2f2f2;
    width: fit-content;
    height: fit-content;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .old-programas-titulo {
    background-color: #f2f2f2;
    margin: 10px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const WrapperMateria = styled.section`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 50px 0;
  margin-top: 2%;

  .top-materia {
    width: 90%;
  }

  .grid-programa {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    width: 100%;
    height: max-content;
    min-height: 500px;
  }

  .titulo-programa {
    text-align: center;
    text-transform: capitalize !important;
    font-weight: 700;
  }

  .description-container {
    height: fit-content;
    text-align: justify;
  }

  .description {
    margin-top: 20px;
    white-space: pre-line;
    font-size: 1.2em;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    .grid-programa {
      grid-template-columns: 1fr;
    }
    .description-container {
      height: 100%;
      width: 100%;
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
