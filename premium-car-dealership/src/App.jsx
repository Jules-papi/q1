import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navigation from './components/Navigation';
import MagneticCursor from './components/MagneticCursor';
import ExplodingLayers from './components/ExplodingLayers';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <MagneticCursor />
      <Navigation />
      <main>
        <ExplodingLayers />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Prestige Motors. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <style jsx>{`
          .footer {
            padding: 3rem 2rem;
            background: var(--bg-dark);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }

          .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .footer-content p {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
          }

          .footer-links {
            display: flex;
            gap: 2rem;
          }

          .footer-links a {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-links a:hover {
            color: #fff;
          }

          @media (max-width: 768px) {
            .footer {
              padding: 2rem 1.5rem;
            }

            .footer-content {
              flex-direction: column;
              gap: 1.5rem;
              text-align: center;
            }

            .footer-links {
              flex-wrap: wrap;
              justify-content: center;
              gap: 1rem;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
