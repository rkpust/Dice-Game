import styled from "styled-components"
import { ResetButton } from "./styled/Button";

const WinnerDialog = ({score, resetGame}) => {
  return (
    <WinnerDialogContainer>
        <div className='loser'>
            <img src="images/sorry.gif" height={300} width={500} alt="Sorry!" />
            <br />
            <h1>You are Loser</h1>
            <h2>Your score is <span>{score}</span></h2>
            <br />
            <ResetButton className="hoverChange" onClick={resetGame}>Try Again</ResetButton>
        </div>
    </WinnerDialogContainer>
  )
}

export default WinnerDialog

const WinnerDialogContainer = styled.div`
position: absolute;
z-index: 1;
top: 10px;
margin: 5px 50px;
width: 90%;
height: 95%;
overflow: auto;
background-color: whitesmoke;
opacity: 0.9056;
border-radius: 5px;
align-items: center;
text-align: center;

.loser {
    color: black;
    margin: 0 25px;
}

.hoverChange {
  background-color: black;
  color: white;

  &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
}

h1 {
  color: red;
  font-size: 50px;
  margin-bottom: 0;
}

span {
  color: red;
  font-size: 28px;
}
`;