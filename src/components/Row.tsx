import React from "react";
import Tile from "./Tile";

type RowProps = {
  wordOfTheDay: string;
  position: number;
  disabled?: boolean;
  advance: () => void;
  changeCell: (i: string) => void;
};

const Row = ({
  wordOfTheDay,
  position,
  disabled = true,
  advance,
  changeCell,
}: RowProps) => {
  const [word, setWord] = React.useState("");
  const [isFinished, setIsFinished] = React.useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const backspaceRef = React.useRef<boolean>(false);

  function updateWord(letter: string, index: number) {
    setWord((prev) => {
      return prev + letter;
    });
    if (letter && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
      changeCell(`${position}-${index + 1}`);
    }
  }
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key !== "Backspace") return (backspaceRef.current = false);
    if (e.key === "Backspace" && index > 0 && !word[index]) {
      backspaceRef.current = true;
      inputRefs.current[index - 1]?.focus();
      setWord((prev) => prev.slice(0, -1));
      changeCell(`${position}-${index - 1}`);
    }
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>, index: number) {
    if (backspaceRef.current) return;
    if (!e.target.value) {
      inputRefs.current[index]?.focus();
    }
  }

  React.useEffect(() => {
    if (word.length == wordOfTheDay.length) {
      advance();
      setIsFinished(true);
      // reveal
    }
  }, [word]);
  React.useEffect(() => {
    if (disabled) return;
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
      changeCell(`${position}-0`);
    }
  }, [disabled]);
  return (
    <div className={`flex gap-2 ${disabled && "board__row_disabled"}`}>
      {wordOfTheDay.split("").map((_, index) => {
        return (
          <Tile
            position={position}
            index={index}
            updateWord={updateWord}
            handleBlur={handleBlur}
            handleKeyDown={handleKeyDown}
            inputRefs={inputRefs}
            isIncluded={wordOfTheDay.includes(word[index])}
            isFinished={isFinished}
            isInPosition={wordOfTheDay[index] === word[index]}
          />
        );
      })}
    </div>
  );
};

export default Row;
