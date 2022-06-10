import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 80%;
  background: rgb(255, 193, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 193, 0, 1) 0%,
    rgba(255, 124, 0, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  .first-section {
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 30px;
  }

  .player {
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 600px) {
    .text-pgm {
      font-size: 30px !important;
    }
  }

  @media (max-width: 1200px) {
    .first-section {
      grid-template-columns: 1fr;
    }

    & {
      height: fit-content;
    }

    .text-pgm {
      margin-top: -15%;
      font-size: 5vw;
    }
  }

  .text-pgm {
    font-size: 3vw;
    text-align: center;
    text-transform: lowercase;
    font-weight: 700;
    text-shadow: 0 2px 2px black;
    color: white;
    padding-top: 22%;
  }

  .live-span {
    transition: all 0.5s;
  }

  .text-pgm:hover {
    .live-span {
      color: #15b1f1;
      text-shadow: 0 2px 2px white;
    }
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: #e6e2d3;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .assista-hoje {
    display: block;
    color: white;
    text-align: center;
    font-size: 3em;
    text-shadow: 0 3px 3px #000;
  }
  .hoje {
    text-decoration: underline;
  }
  .ntv {
    transition: all 0.3s;
  }

  .hoje,
  .ntv {
    font-weight: 700;
  }

  .assista-hoje:hover {
    .ntv {
      color: orange;
    }
  }

  .head-scnd-page {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .box-gif {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  .box-gif img {
    width: 60%;
  }

  @media (max-width: 1200px) {
    .head-scnd-page {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 750px) {
    .assista-hoje,
    .hoje,
    .ntv {
      font-size: 1.5em;
      margin-bottom: 0.5%;
    }
  }
`;
