import styled from "styled-components";

const RollDice = ({currentDice, isSpinning, rollDice}) => {
  return (
    <RollDiceContainer>
        <div className="dice" onClick={() => rollDice()}>
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