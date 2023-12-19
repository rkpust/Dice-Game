import styled from "styled-components";

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

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    background: #000000;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }

`;