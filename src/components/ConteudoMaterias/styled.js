import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80%;
  background: rgb(27, 155, 207);
  background: linear-gradient(
    90deg,
    rgba(27, 155, 207, 1) 0%,
    rgba(3, 79, 132, 1) 51%
  );
  display: grid;
  grid-template-columns: 5fr;

  .no-decorations {
    color: #000;
    text-decoration: none;
  }

  .materias-videos {
    overflow: hidden;
    padding: 20px;
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContainerVideos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .videos {
    display: flex;
    flex-direction: column;
    max-width: 55%;
    min-width: 55%;
    margin: 10px;
    height: fit-content;
  }

  .top {
    display: flex;
    height: 60%;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .a-top {
    width: 260px;
    height: 260px;
    box-shadow: 2px 2px 4px black;
    margin: 5px;
    background-color: #f2f2f2;
    overflow-y: hidden;
  }

  .legenda {
    z-index: 10;
    text-align: center;
    width: 100%;
    height: inherit;
    font-weight: 700;
    font-size: 1em;
    padding: 5px 10px 0px 10px;
    color: #303030;
  }

  .video-thumb {
    overflow: hidden;
    overflow: scroll;
  }

  .older-content {
    width: 30vw;
    min-width: 400px;
    max-width: 40vw;
    height: fit-content;
    margin: 10px;
    box-shadow: 0 0 20px black;
    background-color: red;
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
    height: fit-content;
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
    height: 30px;
  }

  .title-older-content {
    font-weight: 700;
    text-align: end;
    font-size: 2em;
    margin: 20px;
    text-decoration: underline;
    color: #303030;
    text-align: left;
  }

  .a-top:hover .legenda,
  .video-list p:hover {
    color: black;
  }

  @media (max-width: 1200px) {
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
    .a-top {
      height: 220px;
    }
  }

  @media (max-width: 600px) {
    .a-top {
      height: 200px;
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
    height: min-content;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    font-weight: 700;
    margin: 5px;
  }

  .video-list p {
    padding: 12px 15px 0px 15px;
    color: #303030;
  }

  .mais-materias {
    width: 90%;
    height: fit-content;
    margin-bottom: 20px;
  }

  .mais-materias a {
    color: linear-gradient(
      90deg,
      rgba(255, 193, 0, 1) 0%,
      rgba(255, 124, 0, 1) 100%
    );
    text-decoration: none;
    font-size: 2em;
    font-weight: 700;
    transition: all 0.2s;
    float: right !important;
    text-align: right;
    margin-top: 10px;
  }

  .mais-materias a:hover {
    color: linear-gradient(
      90deg,
      rgba(200, 193, 100, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .video-list a {
    text-decoration: none;
    color: #303030;
    font-size: 0.8em;
    text-align: left;
  }
`;
