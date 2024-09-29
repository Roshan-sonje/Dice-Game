import { useState } from "react"
import MainPage from "./components/MainPage"
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted? <GamePlay/> : <MainPage toggle={toggleGamePlay}/>}
    
    </>
  )
}

export default App
