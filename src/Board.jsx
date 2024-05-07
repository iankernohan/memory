import { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import { shuffle } from "./helpers";
import data from "./data";
import WinPopUp from "./WinPopUp";

function Board({ hasWon, setHasWon }) {
  const [currGuesses, setCurrGuesses] = useState([]);
  const [matches, setMatches] = useState([]);
  const [reset, setReset] = useState(false);
  const [shuffleImgs, setShuffleImgs] = useState(false);
  const symbols = useMemo(() => shuffle(data), [shuffleImgs]);

  function restart() {
    setReset((curr) => !curr);
    setTimeout(() => setShuffleImgs((curr) => !curr), 250);
    setCurrGuesses([]);
    setMatches([]);
    setHasWon(false);
  }

  useEffect(() => {
    if (matches.length === data.length) {
      setTimeout(() => setHasWon(true), 500);
    }
  }, [matches, setHasWon]);

  return (
    <>
      <main className="relative grid h-[800px] w-[800px] grid-cols-4 border-2 border-slate-950 bg-stone-800 p-5 shadow-lg">
        {symbols.map((symbol, i) => (
          <Card
            symbol={symbol}
            currGuesses={currGuesses}
            setCurrGuesses={setCurrGuesses}
            matches={matches}
            setMatches={setMatches}
            reset={reset}
            setHasWon={setHasWon}
            key={i}
          />
        ))}
        <WinPopUp hasWon={hasWon} restart={restart} />
      </main>
    </>
  );
}

export default Board;
