import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    h1 {
        font-size: 100px;
        margin: 0 1px;
        line-height: 100px;
    }

    p { 
        margin-top: 0;
        font-size: 24px;
        font-weight: bold;
    }
`;