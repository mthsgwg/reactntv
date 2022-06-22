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
`;

export const ContatoBox = styled.div`
  min-width: 80%;
  min-height: 50vh;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 10px 15px;

  & h2 {
    text-align: center;
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
