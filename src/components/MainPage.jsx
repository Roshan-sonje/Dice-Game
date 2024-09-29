import Box from "./Box";
import Button from "./Button";

const MainPage = ({ toggle }) => {
  

  return (
    <div className="container flex mx-auto items-center h-screen max-w-[1180px]">
      <div className="">
        <img src="\dice\dices.png" alt="Dice png" />
      </div>
      <div className="content flex flex-col items-end">
        <h1 className="text-[96px] font-[700] font-poppins whitespace-nowrap leading-[144px]">
          DICE GAME
        </h1>

        <button
          onClick={toggle}
          className="h-[44px] w-[220px] px-[18px] py-[10px] text-white bg-black rounded-[5px]"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default MainPage;
