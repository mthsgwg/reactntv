import styled from 'styled-components';

export const ContatoContainer = styled.section`
  background: rgb(3, 79, 132);
  background: linear-gradient(
    90deg,
    rgba(3, 79, 132, 1) 56%,
    rgba(27, 155, 207, 1) 100%
  );
  min-height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .search-materias {
    font-size: 4em;
    font-weight: 700;
    color: #f4f4f4;
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.9);
    margin-bottom: 60px;
    margin-top: 40px;
  }

  @media (max-width: 600px) {
    .search-materias {
      font-size: 2em;
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #0d6efd;
  }
`;

export const ContatoBox = styled.div`
  min-width: 80%;
  min-height: 50vh;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  & h2 {
    text-align: center;
    margin-top: 15px;
    font-weight: 900;
    color: #0d6efd;
  }
`;

export const ContatoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    line-height: 5px;
  }

  & h3 {
    margin-top: 10px;
  }

  @media (max-width: 700px) {
    & p {
      line-height: 15px;
    }
  }
`;
