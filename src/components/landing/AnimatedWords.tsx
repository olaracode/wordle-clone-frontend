import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  {
    word: "WORDLE CLONE!",
    states: [
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
      "absent",
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ],
  },
  {
    word: "GUESS WORDS!!",
    states: [
      "correct",
      "absent",
      "present",
      "correct",
      "present",
      "correct",
      "absent",
      "present",
      "correct",
      "absent",
      "present",
      "correct",
      "correct",
    ],
  },
  {
    word: "DAILY PLAYS!!",
    states: [
      "absent",
      "correct",
      "present",
      "correct",
      "absent",
      "correct",
      "absent",
      "present",
      "absent",
      "correct",
      "present",
      "correct",
      "correct",
    ],
  },
];

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const { word, states } = words[currentWordIndex];

  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
      <AnimatePresence mode="wait">
        {word.split("").map((letter, index) => {
          return (
            <motion.div
              key={`${index}-${letter}-${currentWordIndex}`}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-bold rounded ${
                states[index] === "correct"
                  ? "bg-green-500 border-green-500 text-white"
                  : states[index] === "present"
                  ? "bg-yellow-500 border-yellow-500 text-white"
                  : states[index] === "absent"
                  ? "bg-gray-500 border-gray-500 text-white"
                  : "border-gray-300 text-gray-800"
              }`}
            >
              {letter}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWords;
