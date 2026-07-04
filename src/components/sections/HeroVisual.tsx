"use client";

import { motion } from "framer-motion";
import { Play, Code2, Sparkles, Cloud, Smartphone } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, className: "-top-4 -left-4 bg-primary", duration: 5, delay: 0 },
  { Icon: Sparkles, className: "-top-4 -right-4 bg-accent-violet", duration: 6, delay: 0.4 },
  { Icon: Cloud, className: "-bottom-4 -left-4 bg-accent-teal", duration: 5.5, delay: 0.8 },
  { Icon: Smartphone, className: "-bottom-4 -right-4 bg-accent-amber", duration: 6.5, delay: 0.2 },
];

// TODO: replace this illustrated placeholder with a real team photo or product demo video
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary-dark to-accent-violet shadow-2xl shadow-primary/20"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            type="button"
            aria-label="Play showreel"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </motion.button>
        </div>
      </motion.div>

      {floatingIcons.map(({ Icon, className, duration, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${className}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 + delay },
            y: { duration, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      ))}
    </div>
  );
}
