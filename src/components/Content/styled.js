import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 80%;
  min-height: 80vh;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  .first-section {
    width: 80%;
    height: 100%;
    min-height: 60vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .text-pgm {
    font-size: 4em;
    text-align: center;
    text-transform: lowercase;
    font-weight: 700;
    text-shadow: 0 2px 2px black;
    color: white;
    padding-top: 22%;
  }

  .live {
    transition: all 0.5s;
  }

  .text-pgm:hover {
    .live {
      color: #034f84;
      text-shadow: 0 2px 2px white;
    }
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: #e6e2d3;
  display: flex;
  justify-content: center;
  align-items: center;

  .assista-hoje {
    display: block;
    color: white;
    text-align: center;
    font-size: 3em;
    text-shadow: 0 3px 3px #000;
    margin-top: 0%;
    margin-bottom: 2%;
  }
  .hoje {
    text-decoration: underline;
  }
  .ntv {
    transition: all 0.3s;
  }

  .assista-hoje:hover {
    .ntv {
      color: orange;
    }
  }

  .head-scnd-page {
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
  }

  .box-assista {
  }

  .box-gif {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
