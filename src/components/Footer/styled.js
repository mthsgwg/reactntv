import styled from 'styled-components';

export const FooterContainer = styled.section`
  background-color: #444;
  height: fit-content;
  color: #f2f2f2;
  width: 100vw;
  display: flex;
  flex-direction: column;

  & h1 {
    text-align: center;
    font-weight: 700;
    font-size: 4em;
  }

  & p {
    text-align: center;
  }
`;

export const FooterImageContainer = styled.div`
  width: 40px;
  aspect-ratio: 1 / 1;
  align-items: center;
  margin: 10px;

  & img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
