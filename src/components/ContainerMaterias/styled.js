import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding-top: 70px;
  background: rgb(3, 79, 132);
  background: linear-gradient(
    90deg,
    rgba(3, 79, 132, 1) 56%,
    rgba(27, 155, 207, 1) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 30px;

  .spacing {
    height: 3vh;
  }
`;

export const SectionSearch = styled.section`
  margin-top: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  min-height: 80px;

  .search-materias {
    font-size: 3vw;
  }

  .search-button {
    display: flex;
  }
  .search-button input {
    width: 250px;
    height: 30px;
  }
  .search-button button {
    width: 20%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SectionMaterias = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: 5%;
  gap: 30px;

  .portrait {
    background-color: white;
    width: 100%;
    max-width: 360px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .legenda {
    z-index: 10;
    text-align: center;
    height: 100%;
    max-height: 100%;
    font-weight: 700;
    margin: 10px auto;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 900px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 550px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;