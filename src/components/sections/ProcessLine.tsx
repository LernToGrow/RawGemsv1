"use client";

import { motion } from "framer-motion";
import { useActiveStep } from "@/components/sections/ProcessTimeline";

export function ProcessLine({ total }: { total: number }) {
  const activeStep = useActiveStep();
  const progress =
    activeStep < 0 ? 0 : Math.min(activeStep, total - 1) / (total - 1);

  return (
    <div
      aria-hidden
      className="absolute top-6 left-0 right-0 hidden h-0 lg:block"
    >
      <div className="absolute inset-0 border-t-2 border-dashed border-border" />
      <motion.div
        className="absolute inset-0 origin-left border-t-4 border-solid border-primary"
        animate={{ scaleX: progress }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </div>
  );
}
