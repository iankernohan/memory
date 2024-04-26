import { useState } from "react";
import Board from "./Board";

function App() {
  const [hasWon, setHasWon] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-emerald-200">
      <Board hasWon={hasWon} setHasWon={setHasWon} />
    </div>
  );
}

export default App;
