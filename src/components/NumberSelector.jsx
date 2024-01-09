import styled from "styled-components";

const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
  const Number = [1, 2, 3, 4, 5, 6];
  const audio = new Audio('audio/clickselect.mp3');

  console.log(selectedNumber);

  const numberSelectorHandler = (number) => {
    setSelectedNumber(number);
    audio.play();
    setError("");
  }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {
                Number.map((number, index) => 
                    <Box 
                        isSelected = {number == selectedNumber}
                        key={index} 
                        onClick={() => numberSelectorHandler(number)}
                    >
                        {number}
                    </Box>)
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;

    .flex {
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    .error {
        font-size: 20px;
        color: red;
        text-align: center;
    }

`;

const Box = styled.div`
    display: grid;
    place-items: center;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => props.isSelected ? "white" : "black"};

    &:hover {
        background-color: #eaedef;
        color: black;
    }
`;