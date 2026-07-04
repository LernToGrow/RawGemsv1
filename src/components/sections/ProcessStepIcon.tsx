"use client";

import { ReactNode } from "react";
import { useActiveStep } from "@/components/sections/ProcessTimeline";

export function ProcessStepIcon({
  index,
  icon,
}: {
  index: number;
  icon: ReactNode;
}) {
  const activeStep = useActiveStep();
  const isFilled = activeStep >= index;
  const isActive = activeStep === index;

  return (
    <span
      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-colors duration-500 group-hover:-translate-y-1 ${
        isFilled
          ? "border-primary bg-primary text-white"
          : "border-border bg-surface text-primary"
      } ${isActive ? "process-pulse" : ""}`}
    >
      {icon}
    </span>
  );
}
