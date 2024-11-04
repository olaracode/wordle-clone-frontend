import React from "react";
import { motion } from "framer-motion";

type TileProps = {
  index: number;
  position: number;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  isIncluded: boolean;
  isInPosition: boolean;
  isFinished: boolean;
  updateWord: (letter: string, index: number) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>, index: number) => void;
};
const stateClasses = {
  normal: "border-gray-300 text-gray-800",
  correct: "border-green-500 text-white",
  present: "border-yellow-500 text-white",
  absent: "border-gray-500 text-white",
};
const bgClasses = {
  normal: "#fafafa",
  correct: "rgb(34 197 94)",
  present: "rgb(234 179 8)",
  absent: "rgb(107 114 128)",
};

type state = keyof typeof stateClasses;

function getState(
  isIncluded: boolean,
  isFinished: boolean,
  isInPosition: boolean
): state {
  if (!isFinished) return "normal";
  if (!isIncluded) return "absent";
  if (!isInPosition) return "present";
  return "correct";
}
const Tile: React.FC<TileProps> = ({
  index,
  position,
  inputRefs,
  isFinished,
  isIncluded,
  isInPosition,
  updateWord,
  handleKeyDown,
  handleBlur,
}) => {
  const baseClasses =
    "w-14 h-14 border-2 text-center flex items-center justify-center text-2xl font-bold rounded";
  const state = getState(isIncluded, isFinished, isInPosition);
  return (
    <motion.input
      id={`${position}-${index}`}
      name={`letter-${index}`}
      className={`${baseClasses} ${stateClasses[state]}`}
      initial={{ rotateX: 0 }}
      animate={{
        rotateX: isFinished ? [0, 90, 0] : 0,
        scale: isFinished ? [1, 1.1, 1] : 1,
        backgroundColor: isFinished ? bgClasses[state] : "white",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        backgroundColor: { delay: 0.25, duration: 0.01 },
      }}
      // Events --------------------------------
      onKeyDown={(e) => handleKeyDown(e, index)}
      onBlur={(e) => handleBlur(e, index)}
      onChange={(e) => updateWord(e.target.value, index)}
      maxLength={1}
      ref={(el) => (inputRefs.current[index] = el)}
    />
  );
};

export default Tile;
