import styled from 'styled-components';

export const ProgramsContainer = styled.section`
  background-color: #e6e2d3;
  width: 100%;
  height: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  .program-title {
    font-size: 4em;
    color: #f2f2f2;
    text-shadow: 2px 2px 4px black;
    font-weight: 700;
  }

  .first-row {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 70%;
  }

  .first-row-title {
    font-size: 2em;
    margin: 0 auto;
    text-align: center;
  }

  .first-row-title h3 {
    color: #f2f2f2;
    text-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .first-row-pgms {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .div-pgm {
    position: relative;
  }

  .img-row {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .overlay-row:hover {
    opacity: 1;
  }

  .overlay-row {
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    border-radius: 20px;
    font-size: 1.8vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .second-row {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 70%;
    height: 30vh;
    max-height: 30%;
    border-radius: 5px;
    overflow: hidden;
    flex-direction: column;
  }

  .second-row-title {
    font-size: 2em;
    margin: 0 auto;
    text-align: center;
  }

  .second-row-title h3 {
    color: #f2f2f2;
    text-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .second-row-pgms {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 1000px) {
    .second-row {
      height: fit-content;
    }

    .second-row-pgms {
      grid-template-columns: 1fr 1fr;
    }
    padding-bottom: 10px;
  }

  @media (max-width: 700px) {
    .second-row {
      height: fit-content;
    }

    .first-row-pgms {
      grid-template-columns: 1fr;
    }
    .second-row-pgms {
      grid-template-columns: 1fr;
      padding-bottom: 10px;
    }

    .overlay-row {
      font-size: 4vw;
    }
  }
`;
