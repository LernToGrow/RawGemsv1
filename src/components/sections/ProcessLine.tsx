"use client";

import { motion } from "framer-motion";

export function ProcessLine() {
  return (
    <div
      aria-hidden
      className="absolute top-6 left-0 right-0 hidden h-0 lg:block"
    >
      <div className="absolute inset-0 border-t-2 border-dashed border-border" />
      <motion.div
        className="absolute inset-0 origin-left border-t-4 border-solid border-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
}
