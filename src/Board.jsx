import Card from "./Card";

function Board() {
  return (
    <main className="flex flex-wrap justify-between items-center bg-rose-400 w-[1000px] h-[1000px] shadow-lg border-2 border-slate-950 p-5">
      {Array.from({ length: 16 }).map((el, i) => (
        <Card />
      ))}
    </main>
  );
}

export default Board;
