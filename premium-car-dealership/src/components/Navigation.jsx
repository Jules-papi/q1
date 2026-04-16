import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function Navigation() {
  const navRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: navRef,
    offset: ['start start', 'end start'],
  });

  return (
    <motion.nav
      ref={navRef}
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        <a href="#" className="logo">
          PRESTIGE<span className="logo-accent">MOTORS</span>
        </a>

        <ul className="nav-links">
          <li><a href="#collection">Collection</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Inquire Now</a>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #fff;
          text-decoration: none;
        }

        .logo-accent {
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.05em;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          background: var(--accent);
          color: var(--bg-dark);
        }

        @media (max-width: 768px) {
          .navigation {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </motion.nav>
  );
}
