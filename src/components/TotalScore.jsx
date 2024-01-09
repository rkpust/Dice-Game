import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    margin: 0;
    padding: 0;

    h1 {
        font-size: 100px;
        margin: 0;
        padding: 0;
        line-height: 100px;
    }

    p { 
        margin: 0;
        font-size: 24px;
        font-weight: bold;
    }
`;