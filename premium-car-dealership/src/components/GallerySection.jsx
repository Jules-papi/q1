import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Phantom Elite',
    category: 'Luxury Sedan',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
    price: '$450,000',
  },
  {
    id: 2,
    title: 'Spectre GT',
    category: 'Sports Coupe',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
    price: '$380,000',
  },
  {
    id: 3,
    title: 'Aurora SUV',
    category: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?w=1200&h=800&fit=crop',
    price: '$290,000',
  },
  {
    id: 4,
    title: 'Velocity Roadster',
    category: 'Convertible',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=800&fit=crop',
    price: '$520,000',
  },
  {
    id: 5,
    title: 'Nebula Hypercar',
    category: 'Hypercar',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
    price: '$2,100,000',
  },
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section">
      <motion.div
        className="gallery-header"
        style={{ opacity, y }}
      >
        <h2 className="section-title">
          The <span className="gradient-text">Collection</span>
        </h2>
        <p className="section-subtitle">
          Curated excellence for the discerning collector
        </p>
      </motion.div>

      <div className="gallery-container">
        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="carousel-item"
              initial={{ opacity: 0, scale: 1.1, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="image-wrapper">
                <img
                  src={galleryItems[activeIndex].image}
                  alt={galleryItems[activeIndex].title}
                  loading="lazy"
                />
                <div className="image-overlay" />
              </div>
              <div className="item-info">
                <span className="item-category">{galleryItems[activeIndex].category}</span>
                <h3 className="item-title">{galleryItems[activeIndex].title}</h3>
                <span className="item-price">{galleryItems[activeIndex].price}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-nav">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="carousel-thumbs">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`thumb-wrapper ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="thumb-overlay" />
            </motion.button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
        }

        .gallery-header {
          max-width: 800px;
          margin: 0 auto 4rem;
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

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .carousel-wrapper {
          position: relative;
          height: 600px;
          perspective: 1000px;
          overflow: hidden;
          border-radius: 16px;
        }

        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        .item-info {
          position: absolute;
          bottom: 3rem;
          left: 3rem;
          right: 3rem;
          z-index: 2;
        }

        .item-category {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .item-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .item-price {
          font-size: 1.5rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
        }

        .carousel-nav {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 0.75rem;
          z-index: 3;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background: var(--accent);
          border-color: var(--accent);
          transform: scale(1.2);
        }

        .nav-dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .carousel-thumbs {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          overflow-x: auto;
          padding: 1rem 0;
          scrollbar-width: none;
        }

        .carousel-thumbs::-webkit-scrollbar {
          display: none;
        }

        .thumb-wrapper {
          flex-shrink: 0;
          width: 120px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .thumb-wrapper.active,
        .thumb-wrapper:hover {
          opacity: 1;
        }

        .thumb-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .thumb-wrapper.active .thumb-overlay {
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .carousel-wrapper {
            height: 450px;
          }

          .item-info {
            bottom: 2rem;
            left: 2rem;
            right: 2rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 4rem 1.5rem;
          }

          .carousel-wrapper {
            height: 350px;
          }

          .carousel-thumbs {
            gap: 0.5rem;
          }

          .thumb-wrapper {
            width: 100px;
            height: 65px;
          }

          .carousel-nav {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
