import { useState, useEffect } from "react";
import Row from "./row";

function Board() {
  const wordOfTheDay = "word";
  const [activeRow, setActiveRow] = useState(0);
  const [activeCell, setActiveCell] = useState<string>("");

  function changeCell(cellPosition: string) {
    setActiveCell(cellPosition);
  }
  function advance() {
    setActiveRow((prev) => prev + 1);
  }
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault(); // Prevent focus change on Tab and arrow keys
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id !== activeCell) {
        e.preventDefault(); // Prevent focus change on input click
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown); // Add mouse down listener

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown); // Clean up the mouse down listener
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Wordle Clone</h1>
      <main className="bg-white p-8 rounded-lg shadow-lg">
        <div className="grid gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Row
              key={"ROW-" + index}
              position={index}
              changeCell={changeCell}
              wordOfTheDay={wordOfTheDay}
              disabled={!(activeRow === index)}
              advance={advance}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Board;
