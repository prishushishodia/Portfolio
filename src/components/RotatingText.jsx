import { useEffect, useState } from "react";

/* Cycles through texts with a slide-up reveal. Plain CSS animation —
   re-keyed span re-runs the keyframes on every rotation. */
const RotatingText = ({ texts = [], rotationInterval = 2500, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  return (
    <span className="block overflow-hidden">
      <span key={index} className={`block rotate-in ${className}`}>
        {texts[index]}
      </span>
    </span>
  );
};

export default RotatingText;
