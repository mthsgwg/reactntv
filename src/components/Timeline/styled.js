import styled from 'styled-components';

export const TimelineStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 50px;

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
    padding-top: 50px;
    color: #f2f2f2;
    text-align: center;
  }
`;
