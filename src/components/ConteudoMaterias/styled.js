import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80%;
  background-color: #034f84;
  display: grid;
  grid-template-columns: 1fr 5fr;

  .materias {
    color: #f2f2f2;
    font-size: 4vw;
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-weight: 700;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-align: center;
  }

  .materias-videos {
    overflow: hidden;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 1fr;
    }

    .materias {
      writing-mode: horizontal-tb;
    }
  }
`;

export const ContainerVideos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .videos {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    min-width: 50%;
    margin-top: 10px;
    height: fit-content;
  }

  .videos div {
    margin: 5px;
  }
  .top {
    display: flex;
    height: 60%;
    width: 100%;
  }
  .a-top {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 4px black;
  }

  .placeholder-video {
    overflow: hidden;
  }
  .legenda {
    z-index: 10;
    text-align: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    font-weight: 700;
  }

  .video-thumb {
    overflow: hidden;
    overflow: scroll;
  }

  .older-content {
    width: 40%;
    min-width: 40%;
    max-width: 40%;

    background-color: white;
    margin: 20px;
    box-shadow: 2px 2px 4px black;
  }

  .container-older-content {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .search-box {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }
  .search-box input {
    width: 80%;
    height: 30px;
  }
  .search-box button {
    width: 10%;
  }

  .title-older-content {
    font-weight: 700;
    text-align: end;
    font-size: 2em;
    margin: 20px;
    text-decoration: underline;
    color: #303030;
  }

  @media (max-width: 900px) {
    .videos {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
    }

    .older-content {
      width: 90%;
      min-width: 90%;
      max-width: 90%;
    }

    .legenda {
      font-size: 0.7em;
    }
  }
`;

export const ListaVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .video-list {
    width: 90%;
    height: fit-content;
    background-color: #fff;
    box-shadow: 1px 0px 4px black;
    font-size: 1.2em;
    font-weight: 700;
    color: #303030;
    margin: 5px;
  }

  .mais-materias {
    width: 90%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .mais-materias a {
    text-align: right;
    color: #ffa500;
    text-decoration: none;
    font-size: 2em;
    font-weight: 700;
  }

  .mais-materias a:hover {
    color: blue;
  }

  .video-list a {
    text-decoration: none;
    color: #303030;
    padding: 5px;
  }
`;
