'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
}

export function Magnetic({ children, intensity = 0.5, range = 100 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < range) {
      const factor = (1 - distance / range) * intensity;
      setPosition({
        x: deltaX * factor,
        y: deltaY * factor,
      });
      setIsHovered(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    }
  }, [intensity, range]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-in',
      }}
    >
      {children}
    </div>
  );
}
