import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

function useScrollReveal({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const isVisible = revealed || reducedMotion;

  useEffect(() => {
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollReveal;
