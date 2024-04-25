import { useMemo, useState } from "react";
import Card from "./Card";
import { shuffle } from "./helpers";
import data from "./data";

function Board() {
  const symbols = useMemo(() => shuffle(data), [data]);
  const [currGuesses, setCurrGuesses] = useState([]);
  const [matches, setMatches] = useState([]);

  return (
    <main className="grid h-[800px] w-[800px] grid-cols-4 border-2 border-slate-950 bg-rose-400 p-5 shadow-lg">
      {symbols.map((symbol, i) => (
        <Card
          symbol={symbol}
          currGuesses={currGuesses}
          setCurrGuesses={setCurrGuesses}
          matches={matches}
          setMatches={setMatches}
          key={i}
        />
      ))}
    </main>
  );
}

export default Board;
