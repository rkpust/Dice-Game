import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <MainContainer>
      <div className="top">
        <TotalScore />
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      
      <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice} isSpinning={isSpinning} setIsSpinning={setIsSpinning} />
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