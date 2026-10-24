"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const Component = motion[as];
  const shouldReduceMotion = useReducedMotion();
  const reducedMotionVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0 } },
  };

  return (
    <Component
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
      custom={shouldReduceMotion ? 0 : delay}
      variants={shouldReduceMotion ? reducedMotionVariants : textVariants}
      className={className}
    >
      {children}
    </Component>
  );
};
