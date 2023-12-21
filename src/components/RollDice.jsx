import styled from "styled-components";

const RollDice = ({currentDice, setCurrentDice, isSpinning, setIsSpinning}) => {
    const audio = new Audio('audio/dice-rolling.mp3');

    // generate random number between 1 to 6
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // set spinning state
    const diceSpinning = () => {
        setIsSpinning(!isSpinning);
      };

    // set dice functionality
    const rollDice = () => {
        audio.play();

        const receivedNumber = generateRandomNumber();
        console.log(receivedNumber);

        setCurrentDice((prev) => receivedNumber)
        
    }
    

  return (
    <RollDiceContainer>
        <div className="dice" onClick={() => {
            rollDice();
            diceSpinning();
        }}>
            <img src={`images/dices/dice_${currentDice}.png`} style={{ transform: isSpinning ? 'rotate(360deg)' : 'none', transition: 'transform 0.3s ease-in-out', }} height={180} width={180} alt={`Dice ${currentDice}`}/>
        </div>
        <p>Click on Dice to Roll</p>
    </RollDiceContainer>
  )
}

export default RollDice;

const RollDiceContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .dice {
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    p {
        font-size: 20px;
    }
`;