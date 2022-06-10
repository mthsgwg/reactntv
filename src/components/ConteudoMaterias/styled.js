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

  .top {
    display: flex;
    height: 60%;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .a-top {
    width: 300px;
    height: 250px;
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
  }

  .video-thumb {
    overflow: hidden;
    overflow: scroll;
  }

  .older-content {
    width: 40vw;
    min-width: 500px;
    max-width: 40vw;
    height: fit-content;

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
    font-size: 0.8em;
    text-align: left;
  }
`;
