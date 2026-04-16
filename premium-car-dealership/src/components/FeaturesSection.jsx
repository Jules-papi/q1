import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    id: 1,
    title: 'Performance Tuning',
    description: 'Bespoke engine calibration for maximum power and efficiency',
    icon: '⚡',
    color: '#c9a962',
  },
  {
    id: 2,
    title: 'Luxury Interiors',
    description: 'Hand-crafted leather and premium materials throughout',
    icon: '💎',
    color: '#d4b978',
  },
  {
    id: 3,
    title: 'Advanced Safety',
    description: 'Cutting-edge driver assistance and protection systems',
    icon: '🛡️',
    color: '#e0c88a',
  },
  {
    id: 4,
    title: 'Smart Technology',
    description: 'Seamless connectivity and intuitive control interfaces',
    icon: '🔮',
    color: '#eccfa0',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={sectionRef} className="features-section">
      <motion.div
        className="features-header"
        style={{ opacity, y }}
      >
        <h2 className="section-title">
          Engineered for <span className="gradient-text">Excellence</span>
        </h2>
        <p className="section-subtitle">
          Every detail meticulously crafted for the discerning driver
        </p>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      <style jsx>{`
        .features-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
        }

        .features-header {
          max-width: 800px;
          margin: 0 auto 6rem;
          text-align: center;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .section-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 4rem 1.5rem;
          }

          .features-header {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="feature-card glass-effect"
      style={{
        opacity,
        scale,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="feature-icon" style={{ color: feature.color }}>
        {feature.icon}
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
      <div className="feature-glow" style={{ background: `radial-gradient(circle, ${feature.color}22 0%, transparent 70%)` }} />

      <style jsx>{`
        .feature-card {
          position: relative;
          padding: 2.5rem;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px currentColor);
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #fff;
        }

        .feature-description {
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .feature-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .feature-card:hover .feature-glow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .feature-card {
            padding: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
}
