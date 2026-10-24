"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotionVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0 } },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? "animate" : "initial"}
      animate="animate"
      variants={shouldReduceMotion ? reducedMotionVariants : pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
