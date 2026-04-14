"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef, type ReactNode } from "react";

export function Parallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollHero({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative">
      <motion.div
        style={reduced ? undefined : { y, opacity, scale }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function ParallaxBackground({
  className,
  speed = -80,
  children,
}: {
  className?: string;
  speed?: number;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed]);

  return (
    <motion.div
      aria-hidden
      style={reduced ? undefined : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
