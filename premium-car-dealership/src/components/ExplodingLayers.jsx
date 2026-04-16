import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const layers = [
  {
    id: 1,
    name: 'Base Layer',
    color: '#1a1a1a',
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    zIndex: 1,
  },
  {
    id: 2,
    name: 'Chassis Frame',
    color: '#2a2a2a',
    scale: 0.95,
    rotateX: 5,
    rotateY: -5,
    zIndex: 2,
  },
  {
    id: 3,
    name: 'Engine Block',
    color: '#3a3a3a',
    scale: 0.9,
    rotateX: 10,
    rotateY: -10,
    zIndex: 3,
  },
  {
    id: 4,
    name: 'Interior',
    color: '#4a4a4a',
    scale: 0.85,
    rotateX: 15,
    rotateY: -15,
    zIndex: 4,
  },
  {
    id: 5,
    name: 'Body Shell',
    color: '#c9a962',
    scale: 0.8,
    rotateX: 20,
    rotateY: -20,
    zIndex: 5,
  },
  {
    id: 6,
    name: 'Details',
    color: '#d4b978',
    scale: 0.75,
    rotateX: 25,
    rotateY: -25,
    zIndex: 6,
  },
  {
    id: 7,
    name: 'Final Polish',
    color: '#e0c88a',
    scale: 0.7,
    rotateX: 30,
    rotateY: -30,
    zIndex: 7,
  },
];

export default function ExplodingLayers() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            <span className="gradient-text">Prestige</span> Motors
          </h1>
          <p className="hero-subtitle">
            Experience automotive excellence redefined
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>

        <div className="layers-container">
          <div className="perspective-wrapper">
            {layers.map((layer, index) => {
              const zTranslate = useTransform(
                smoothProgress,
                [0, 1],
                [0, 150 + index * 80]
              );

              const rotateX = useTransform(
                smoothProgress,
                [0, 1],
                [layer.rotateX, layer.rotateX + 20]
              );

              const rotateY = useTransform(
                smoothProgress,
                [0, 1],
                [layer.rotateY, layer.rotateY - 20]
              );

              const scale = useTransform(
                smoothProgress,
                [0, 1],
                [layer.scale, layer.scale - 0.1]
              );

              const opacity = useTransform(
                smoothProgress,
                [index * 0.1, index * 0.1 + 0.3],
                [0, 1]
              );

              return (
                <motion.div
                  key={layer.id}
                  className="layer-card glass-effect"
                  style={{
                    zIndex: layer.zIndex,
                    transformStyle: 'preserve-3d',
                    transform: useTransform(smoothProgress, (value) => 
                      `translateZ(${zTranslate.get()}px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg) scale(${scale.get()})`
                    ),
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div className="layer-content">
                    <div
                      className="layer-visual"
                      style={{ backgroundColor: layer.color }}
                    >
                      <div className="layer-glow" />
                    </div>
                    <div className="layer-info">
                      <span className="layer-number">0{layer.id}</span>
                      <h3 className="layer-name">{layer.name}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-line"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <span>Scroll to Explore</span>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 100vh;
          padding-top: 4rem;
        }

        .hero-text {
          position: sticky;
          top: 20vh;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-button {
          padding: 1.2rem 2.5rem;
          background: var(--accent);
          color: var(--bg-dark);
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #d4b978;
          box-shadow: 0 0 30px rgba(201, 169, 98, 0.4);
        }

        .layers-container {
          perspective: 1000px;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .perspective-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .layer-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 500px;
          margin-left: -200px;
          margin-top: -250px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
        }

        .layer-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .layer-visual {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layer-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
        }

        .layer-info {
          padding: 2rem;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
        }

        .layer-number {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .layer-name {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0.5rem;
          color: #fff;
        }

        .scroll-indicator {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-text {
            position: relative;
            top: 0;
            text-align: center;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .cta-button {
            margin: 0 auto;
            display: block;
          }

          .layers-container {
            height: 60vh;
          }

          .layer-card {
            width: 300px;
            height: 400px;
            margin-left: -150px;
            margin-top: -200px;
          }
        }

        @media (max-width: 768px) {
          .layer-card {
            width: 260px;
            height: 350px;
            margin-left: -130px;
            margin-top: -175px;
          }
        }
      `}</style>
    </section>
  );
}
