import styled from 'styled-components';

export const TimelineContainer = styled.section`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

export const TimelineStyled = styled.div`
  width: 900px;
  min-width: 900px;
  margin: 0 auto;
  height: 60px;

  .indexedStep {
    color: white;
    width: 40px;
    height: 40px;
    font-size: 12px;
    background-color: rgba(211, 211, 211, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indexedStep.accomplished {
    background-color: rgba(0, 116, 217, 1);
  }

  .steps {
    width: 60px;
    display: block;
    gap: 30px;
  }

  .steps p {
    color: #f2f2f2;
    text-align: center;
    padding-top: 60px;
  }
`;
