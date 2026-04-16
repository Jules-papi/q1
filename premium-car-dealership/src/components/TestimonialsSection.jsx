import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alexander Richardson',
    role: 'CEO, Richardson Capital',
    content: 'Prestige Motors delivered an experience beyond expectation. The attention to detail and personalized service is unmatched in the industry.',
    avatar: 'AR',
  },
  {
    id: 2,
    name: 'Victoria Chen',
    role: 'Founder, Chen Ventures',
    content: 'Their collection is extraordinary, but what truly sets them apart is their deep understanding of what discerning clients value.',
    avatar: 'VC',
  },
  {
    id: 3,
    name: 'Marcus Blackwood',
    role: 'Professional Racing Driver',
    content: 'As someone who demands perfection, I found my ideal vehicle through Prestige Motors. Their expertise in performance vehicles is exceptional.',
    avatar: 'MB',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={sectionRef} className="testimonials-section">
      <motion.div
        className="testimonials-header"
        style={{ opacity, y }}
      >
        <h2 className="section-title">
          Trusted by <span className="gradient-text">Visionaries</span>
        </h2>
        <p className="section-subtitle">
          Join our exclusive community of distinguished clients
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>

      <style jsx>{`
        .testimonials-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
        }

        .testimonials-header {
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
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 4rem 1.5rem;
          }

          .testimonials-header {
            margin-bottom: 3rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ testimonial, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="testimonial-card glass-effect"
      style={{ opacity, y, scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
    >
      <div className="quote-icon">"</div>
      <p className="testimonial-content">{testimonial.content}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{testimonial.avatar}</div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <span className="author-role">{testimonial.role}</span>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card {
          position: relative;
          padding: 3rem;
          border-radius: 16px;
          overflow: hidden;
        }

        .quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          font-size: 6rem;
          font-family: Georgia, serif;
          color: var(--accent);
          opacity: 0.2;
          line-height: 1;
        }

        .testimonial-content {
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), #d4b978);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--bg-dark);
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .author-role {
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2rem;
          }

          .quote-icon {
            font-size: 4rem;
            top: 1rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
}
