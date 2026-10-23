
import type { CSSProperties, ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const Component = as;

  const style: CSSProperties = {
    animationDelay: `${delay}s`,
  };

  return (
    <Component
      className={`animate-fade-up ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
};
