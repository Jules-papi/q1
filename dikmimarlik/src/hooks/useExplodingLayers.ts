'use client';

import { useScroll, useTransform, Spring } from 'framer-motion';
import { useRef } from 'react';

interface UseExplodingLayersOptions {
  offset?: number;
  spring?: Spring;
}

export function useExplodingLayers(options: UseExplodingLayersOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: options.offset || ['start start', 'end end'],
  });

  const spring = options.spring || {
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  // Create transform values for 7 layers with different Z positions
  const layerTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, -300], spring),
    useTransform(scrollYProgress, [0, 1], [0, -250], spring),
    useTransform(scrollYProgress, [0, 1], [0, -200], spring),
    useTransform(scrollYProgress, [0, 1], [0, -150], spring),
    useTransform(scrollYProgress, [0, 1], [0, -100], spring),
    useTransform(scrollYProgress, [0, 1], [0, -50], spring),
    useTransform(scrollYProgress, [0, 1], [0, 0], spring),
  ];

  // Rotation transforms for added depth
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -3]);

  // Opacity and blur for atmospheric depth
  const opacities = [
    useTransform(scrollYProgress, [0, 0.5], [0.3, 1]),
    useTransform(scrollYProgress, [0, 0.4], [0.4, 1]),
    useTransform(scrollYProgress, [0, 0.3], [0.5, 1]),
    useTransform(scrollYProgress, [0, 0.2], [0.6, 1]),
    useTransform(scrollYProgress, [0, 0.1], [0.7, 1]),
    useTransform(scrollYProgress, [0, 0.05], [0.8, 1]),
    useTransform(scrollYProgress, [0, 0], [1, 1]),
  ];

  const blurs = [
    useTransform(scrollYProgress, [0, 0.5], [20, 0]),
    useTransform(scrollYProgress, [0, 0.4], [15, 0]),
    useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    useTransform(scrollYProgress, [0, 0.2], [8, 0]),
    useTransform(scrollYProgress, [0, 0.1], [5, 0]),
    useTransform(scrollYProgress, [0, 0.05], [3, 0]),
    useTransform(scrollYProgress, [0, 0], [0, 0]),
  ];

  return {
    containerRef,
    layerTransforms,
    rotateX,
    rotateY,
    opacities,
    blurs,
  };
}
