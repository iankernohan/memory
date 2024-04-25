import { useState } from "react";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped((curr) => !curr);
  }

  return (
    <div
      className={`w-[200px] h-[200px] [perspective:1000px] cursor-pointer`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 shadow-sm [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(-180deg)]" : ""
        }`}
      >
        <div className="flex justify-center items-center bg-blue-400 absolute inset-0 w-full h-full">
          front
        </div>
        <div className="flex justify-center items-center bg-red-800 text-white absolute inset-0 w-full h-full [transform:rotateY(-180deg)] [backface-visibility:hidden]">
          back
        </div>
      </div>
    </div>
  );
}

export default Card;
