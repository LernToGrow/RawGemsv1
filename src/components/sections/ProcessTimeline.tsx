"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { useInView } from "framer-motion";

const StepContext = createContext(-1);

export function useActiveStep() {
  return useContext(StepContext);
}

const STEP_MS = 1100;

export function ProcessTimeline({
  total,
  children,
}: {
  total: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    let step = 0;
    setActiveStep(0);
    const interval = setInterval(() => {
      step += 1;
      setActiveStep(Math.min(step, total));
      if (step >= total) clearInterval(interval);
    }, STEP_MS);
    return () => clearInterval(interval);
  }, [inView, total]);

  return (
    <div ref={ref}>
      <StepContext.Provider value={activeStep}>{children}</StepContext.Provider>
    </div>
  );
}
