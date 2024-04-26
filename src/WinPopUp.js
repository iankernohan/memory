function WinPopUp({ hasWon, restart }) {
  const winningMessages = [
    "The One Piece is yours!",
    "You are now the King of Pirates!",
    "You have defeated Black Beard!",
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-60 items-center justify-center text-center">
      <div
        className={`space-y-3 bg-stone-500/60 px-8 py-5 backdrop-blur-sm ${hasWon ? "z-10 block" : "z-0 hidden"}`}
      >
        <p className="text-2xl font-semibold text-white">
          {winningMessages[Math.floor(Math.random() * winningMessages.length)]}
        </p>
        <button
          className="rounded-full bg-blue-400 px-3 py-2"
          onClick={restart}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default WinPopUp;
