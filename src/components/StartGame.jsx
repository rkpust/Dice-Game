import styled from "styled-components";
import { Button } from "./styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="images/dices.png" alt="Dice" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 97vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    
    .content {
      h1 {
        font-size: 93px;
        white-space: nowrap;
        margin-bottom: 5px;
      }
    }
`;