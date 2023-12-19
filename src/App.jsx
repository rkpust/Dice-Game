import { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((previousState) => !previousState);
  };

  return (
    <>
      {
        isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />
      }

      {/* https://www.figma.com/file/rephrU2FVgN8MFz6XhnP51/Learn-React-with-10-Projects?type=design&node-id=21-179&mode=design */}
    </>
  )
}

export default App