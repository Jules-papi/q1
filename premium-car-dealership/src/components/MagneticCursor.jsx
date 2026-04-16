import { useEffect, useState } from 'react';

export default function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, .thumb-wrapper, .nav-dot');
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setHovered(true));
      el.addEventListener('mouseleave', () => setHovered(false));
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setHovered(true));
        el.removeEventListener('mouseleave', () => setHovered(false));
      });
    };
  }, [hovered]);

  return (
    <>
      <div
        className={`cursor ${hovered ? 'hovered' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
        }}
      />

      <style jsx>{`
        .cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.2s ease;
        }

        .cursor.hovered {
          transform: translate(-50%, -50%) scale(1.5);
        }

        .cursor-follower {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(201, 169, 98, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.15s ease-out;
        }

        @media (max-width: 768px) {
          .cursor,
          .cursor-follower {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
