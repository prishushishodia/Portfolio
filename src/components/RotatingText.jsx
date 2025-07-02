import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const RotatingText = ({
  texts = [],
  rotationInterval = 2000,
  mainClassName = "",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`relative inline-block ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[currentIndex]}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className={`block ${splitLevelClassName}`}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
