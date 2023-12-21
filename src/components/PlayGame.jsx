import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <MainContainer>
      <div className="top">
        <TotalScore score={score} />
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </div>
      
      <RollDice currentDice={currentDice} isSpinning={isSpinning} rollDice={rollDice} />
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