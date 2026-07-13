"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Cpu, Database, Smartphone, Share2, Zap, Gem } from "lucide-react";

const techIcons = [
  { Icon: Code2, className: "top-[0%] left-1/2 -translate-x-1/2", delay: 0.2 },
  { Icon: Zap, className: "top-[16%] left-[10%]", delay: 0.5 },
  { Icon: Cpu, className: "top-[16%] right-[10%]", delay: 0.8 },
  { Icon: Share2, className: "top-1/2 left-[0%] -translate-y-1/2", delay: 0.35 },
  { Icon: Database, className: "top-1/2 right-[0%] -translate-y-1/2", delay: 0.65 },
  { Icon: Cloud, className: "bottom-[10%] left-[14%]", delay: 0.95 },
  { Icon: Smartphone, className: "bottom-[10%] right-[14%]", delay: 1.1 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[440px] w-full max-w-lg items-center justify-center">
      <motion.div
        aria-hidden
        className="absolute h-[85%] w-[85%] rounded-full bg-primary/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gem className="h-44 w-44 text-primary drop-shadow-2xl sm:h-52 sm:w-52" />
        </motion.div>
      </motion.div>

      {techIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-foreground shadow-lg ${className}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      ))}
    </div>
  );
}
