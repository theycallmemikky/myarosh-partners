"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "none";

export function Reveal({
  children,
  delay = 0,
  y = 40,
  dir = "up",
  className,
  as: Tag = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  dir?: Dir;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "p" | "li" | "article";
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const initial =
    dir === "up"
      ? { opacity: 0, y }
      : dir === "left"
        ? { opacity: 0, x: -y }
        : dir === "right"
          ? { opacity: 0, x: y }
          : { opacity: 0 };

  const M = motion[Tag] as typeof motion.div;

  return (
    <M
      className={className}
      initial={reduced ? { opacity: 1 } : initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.2, 0.7, 0.1, 1],
      }}
    >
      {children}
    </M>
  );
}

export function RevealStagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? "show" : "hide"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hide: {},
        show: {
          transition: { staggerChildren: gap, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article" | "p";
}) {
  const M = motion[Tag] as typeof motion.div;
  return (
    <M
      className={className}
      variants={{
        hide: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.2, 0.7, 0.1, 1],
          },
        },
      }}
    >
      {children}
    </M>
  );
}
