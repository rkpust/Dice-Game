import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import GameRules from "./GameRules";

import { Button, ResetButton } from "./styled/Button";

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const audio = new Audio('audio/dice-rolling.mp3');

    // generate random number between 1 to 6
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // set dice functionality
    const rollDice = () => {
        if (!selectedNumber) {
          setError("You have not selected any number");
          return;
        }

        // set spinning state
        setIsSpinning(!isSpinning);
        audio.play();

        const receivedNumber = generateRandomNumber();
        console.log(receivedNumber);

        setCurrentDice((prev) => receivedNumber);

        if (receivedNumber == selectedNumber) {
          setScore((prev) => prev + receivedNumber);
        }
        else {
          setScore((prev) => prev - 1 );
        }
    }

    const resetGame = () => {
      setSelectedNumber();
      setError("");
      setCurrentDice(1);
      setIsSpinning(false);
      setScore(0);
    }

    const showGameRules = () => {
      setShowRules((prev) => !showRules);
    }

  return (
    <MainContainer>
      <div className="top">
        <TotalScore score={score} />
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </div>
      
      <RollDice currentDice={currentDice} isSpinning={isSpinning} rollDice={rollDice} />
      <div className="btn-container">
      <ResetButton onClick={resetGame}>Reset Game</ResetButton>
      <Button onClick={showGameRules}>Show Rules</Button>
      </div>
      {showRules ? <GameRules showGameRules={showGameRules} /> : showRules}
    </MainContainer>
  )
}

export default PlayGame;

const MainContainer = styled.main`
  /* opacity: ${(props) => (!props.showRules ? "0.5" : "1")}; */

  .top {
    display: flex;
    justify-content: space-around;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;