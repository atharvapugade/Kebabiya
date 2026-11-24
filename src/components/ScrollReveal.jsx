"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 24,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
