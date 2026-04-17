"use client";

import { motion, useScroll, useTransform, SpringOptions } from "framer-motion";
import { useRef } from "react";

interface ExplodingLayerProps {
  children: React.ReactNode;
  index: number;
  totalLayers: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

export function ExplodingLayer({
  children,
  index,
  totalLayers,
  scrollProgress,
}: ExplodingLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate layer position in the stack (centered around 0)
  const normalizedIndex = index - Math.floor(totalLayers / 2);

  // Spring configuration for smooth, physics-based movement
  const springConfig: SpringOptions = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001,
  };

  // Z-axis explosion - layers separate based on scroll
  const zTranslate = useTransform(
    scrollProgress,
    [0, 0.3, 0.6, 1],
    [0, normalizedIndex * 80, normalizedIndex * 120, normalizedIndex * 150],
    { clamp: false }
  );

  // Rotation effect - subtle tilt based on position and scroll
  const rotateX = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0, normalizedIndex * 2, normalizedIndex * 4],
    { clamp: false }
  );

  const rotateY = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0, -normalizedIndex * 1.5, -normalizedIndex * 3],
    { clamp: false }
  );

  // Scale effect - layers slightly scale as they explode
  const scale = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [1, 1 + Math.abs(normalizedIndex) * 0.02, 1 + Math.abs(normalizedIndex) * 0.04]
  );

  // Opacity fade for outer layers
  const opacity = useTransform(
    scrollProgress,
    [0, 0.7, 1],
    [1, 1 - Math.abs(normalizedIndex) * 0.1, 1 - Math.abs(normalizedIndex) * 0.15]
  );

  // Blur variation for depth perception
  const blur = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0, Math.abs(normalizedIndex) * 0.5, Math.abs(normalizedIndex) * 1]
  );

  // Shadow intensity based on Z position
  const shadowOpacity = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0.1, 0.2 + Math.abs(normalizedIndex) * 0.05, 0.3 + Math.abs(normalizedIndex) * 0.08]
  );

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transformStyle: "preserve-3d",
        z: zTranslate,
        rotateX,
        rotateY,
        scale,
        opacity,
        filter: blur.to((b) => `blur(${b}px)`),
        boxShadow: shadowOpacity.to((o) => `0 20px 60px rgba(0, 0, 0, ${o})`),
        willChange: "transform, opacity, filter",
      }}
      transition={{ type: "spring", ...springConfig }}
    >
      {children}
    </motion.div>
  );
}
