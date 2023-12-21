import styled from "styled-components"
import { Button } from "./styled/Button";

const GameRules = ({showGameRules}) => {
  return (
    <GameRulesContainer>
        <div className="rules">
        <h1>How To Play Dice Game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on dice image -</p>
        <p>1. if selected number is equal to dice number you will get same point as dice.</p>
        <p>2. if you get wrong guess then 1 point will be deducted.</p>
        <p>If your score is -</p>
        <p>i. 50 you will win.</p>
        <p>ii. -50 you will loss.</p>
        </div>
        <br />
        <p>Developed By <a href="https://www.linkedin.com/in/rkpust/" target="_blank">Rezaul Karim</a></p>
        <br />
        <Button onClick={showGameRules}>OK</Button>
    </GameRulesContainer>
  )
}

export default GameRules
const GameRulesContainer = styled.div`
display: ${(props) => (!props.showRules ? "block" : "none")};
position: absolute;
z-index: 1;
left: 110px;
top: 10px;
margin: 30px 300px;
width: 35%;
height: 90%;
overflow: auto;
background-color: whitesmoke;
opacity: 0.9056;
border-radius: 5px;
align-items: center;
text-align: center;

.rules {
    color: black;
    margin: 0 15px;
}
`;