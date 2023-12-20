import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const PlayGame = () => {
  return (
    <MainContainer>
      <div className="top">
        <TotalScore />
        <NumberSelector />
      </div>
      
      <RollDice />
    </MainContainer>
  )
}

export default PlayGame;

const MainContainer = styled.main`
  padding-top: 20px;

  .top {
    display: flex;
    justify-content: space-around;
  }
`;