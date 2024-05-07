import { useEffect, useState } from "react";

function Card({
  symbol,
  currGuesses,
  setCurrGuesses,
  matches,
  setMatches,
  reset,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMatched = matches.includes(symbol);

  function handleFlip() {
    setIsFlipped((curr) => !curr);
    setCurrGuesses((curr) => [...curr, symbol]);
  }

  useEffect(() => {
    if (currGuesses.length >= 2) {
      if (currGuesses[0] === currGuesses[1] && currGuesses[0] === symbol) {
        setMatches((curr) => [...curr, symbol]);
      } else if (!isMatched) {
        setTimeout(() => {
          setIsFlipped(false);
        }, 1000);
        setCurrGuesses([]);
      }
    }
  }, [currGuesses, setMatches, symbol, isMatched, setCurrGuesses]);

  useEffect(() => {
    setIsFlipped(false);
  }, [reset]);

  return (
    <div
      className={`z-10 m-auto h-[90%] w-[90%] cursor-pointer [perspective:1000px]`}
      onClick={isFlipped ? null : handleFlip}
    >
      <div
        className={`relative h-full w-full shadow-sm transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(-180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-blue-400">
          <img src="front.jpeg" alt="" />
        </div>
        <div
          className={`absolute inset-0 flex h-full w-full items-center justify-center text-white transition-colors duration-1000 [backface-visibility:hidden] [transform:rotateY(-180deg)] ${isMatched ? "bg-green-500" : "bg-red-800"}`}
        >
          <img src={`char${symbol}.jpeg`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
