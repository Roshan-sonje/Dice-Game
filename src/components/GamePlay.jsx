import React from "react";
import Box from "./Box";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showText, setShowText] = useState()
  const [showRule, setShowRule] = useState(false)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const toggle = () => {
    setShowRule(!showRule)
  }

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(!selectedNumber){
        return setShowText("You have not selected any number")
    }  

    if (currentDice === selectedNumber) {
        setScore((prev) => prev + currentDice);
      } else {
        setScore((prev) => prev - 2);
      }
  };

  

  return (
    <>
      <div className="container flex justify-around mt-[64px]">
        <div className="score w-[135px] text-center flex flex-col">
          <h1 className="text-[100px] font-[500] leading-[100px]">{score}</h1>
          <p className="text-[24px] font-[500]">Total Score</p>
        </div>
        <div className="flex flex-col items-end">
            <p className="text-[24px] font-[500] text-red-600">{showText}</p>
          <Box
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            setShowText={setShowText}
          />
          <p className="text-[24px] font-[700] mt-4">Select Number</p>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <div onClick={rollDice} className="w-[200px] mt-[50px] cursor-pointer">
          <img src={`\\dice\\dice-${currentDice}.png`} alt="" />
        </div>
        <p className="text-[24px] font-[500] mt-[15px]">
          Click on Dice to roll
        </p>
        <div className="flex flex-col gap-[24px] mt-[36px]">
          <button onClick={() => {if(selectedNumber){setSelectedNumber(undefined); setScore(0)}}} className="h-[44px] w-[220px] px-[18px] py-[10px] text-black border font-bold border-black  rounded-[5px] hover:bg-black hover:text-white hover:transition-all transition-all">
            Reset Score
          </button>
          <button onClick={toggle} className="font-[700] h-[44px] w-[220px] px-[18px] py-[10px] text-white bg-black rounded-[5px] hover:bg-white hover:border hover:border-black hover:text-black hover:font-[700]  hover:transition-all  transition-all">
            Show Rules
          </button>
        </div>
        {showRule && 
        <div className="max-w-[794px] bg-[#FBF1F1] p-[20px] flex flex-col mt-[50px] mb-[30px] rounded-md">
        <h2 className="text-[24px] font-[700] mb-[24px]">How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </div>
        }
        
      </div>
    </>
  );
};

export default GamePlay;
