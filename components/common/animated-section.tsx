"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const initialOffset = directionOffset[direction];
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : delay,
          ease: "easeOut" as const,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};
