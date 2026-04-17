"use client";

import { useRef, useEffect, useCallback } from "react";

interface MagneticProps {
  intensity?: number;
  range?: number;
}

export function useMagnetic({ intensity = 0.5, range = 100 }: MagneticProps = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        const moveX = deltaX * intensity;
        const moveY = deltaY * intensity;
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      } else {
        element.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [intensity, range]
  );

  const handleMouseLeave = useCallback(() => {
    const element = elementRef.current;
    if (element) {
      element.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return elementRef;
}
