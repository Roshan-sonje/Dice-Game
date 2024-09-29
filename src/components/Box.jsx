import React, { useState } from "react";

const Box = ({selectedNumber,setSelectedNumber,setShowText}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
//   const [selectedNumber, setSelectedNumber] = useState();
  
 
  
  return (
    <div
    
     className="flex gap-[30px]">
      {arrayNumber.map((value, i) => (
        <div 
        key={i}  
        onClick={() => {setSelectedNumber(value); setShowText(undefined)}} 
        className={value === selectedNumber ? 'bg-black text-white h-[72px] w-[72px] grid place-items-center text-[24px] font-[700]' : 'border-2 cursor-pointer border-black h-[72px] w-[72px] grid place-items-center text-[24px] font-[700]'}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default Box;


// ${isSelected? "bg-black text-white": }

// {` border-2 cursor-pointer border-black h-[72px] w-[72px] grid place-items-center text-[24px] font-[700]`}