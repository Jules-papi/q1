import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Split text into characters for animation
const splitText = (text) => {
  return text.split('').map((char, i) => (
    <span key={i} className="split-char" style={{ display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

// Navigation Component
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">Aether</div>
      <div className="nav-menu">
        <a href="#philosophy" className="nav-link">Philosophy</a>
        <a href="#craftsmanship" className="nav-link">Craftsmanship</a>
        <a href="#collection" className="nav-link">Collection</a>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-title .split-char', {
        y: '120%',
        stagger: 0.03,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5,
      })
      .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section pin-section">
      <div className="hero-content container">
        <h1 className="text-huge hero-title">
          {splitText('LESS BUT BETTER')}
        </h1>
        <p className="text-medium hero-subtitle" style={{ marginTop: '2rem', maxWidth: '600px' }}>
          Where timeless design meets uncompromising quality. 
          Experience the art of quiet luxury.
        </p>
      </div>
      <div className="hero-scroll-indicator" style={{ 
        position: 'absolute', 
        bottom: '4rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        opacity: 0 
      }}>
        <div style={{ 
          width: '1px', 
          height: '60px', 
          background: '#000',
          margin: '0 auto'
        }} />
        <span className="text-eyebrow" style={{ display: 'block', marginTop: '1rem' }}>Scroll</span>
      </div>
    </section>
  );
};

// Philosophy Section with Pinned Image
const PhilosophySection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Image scale and morph
      tl.fromTo(imageRef.current, 
        { scale: 1.2, filter: 'grayscale(100%)' },
        { scale: 1, filter: 'grayscale(0%)', duration: 2, ease: 'none' }
      )
      // Text reveals
      .from(textRefs.current.map(ref => ref), {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      }, '-=1');

      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="philosophy-section pin-section">
      <div className="philosophy-image-wrapper" style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}>
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=2400&h=3200&fit=crop"
          alt="Architectural minimalism"
          className="architectural-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="gradient-overlay" />
      </div>
      <div className="philosophy-content container" style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)',
      }}>
        <p ref={el => textRefs.current[0] = el} className="text-eyebrow" style={{ marginBottom: '2rem' }}>
          Our Philosophy
        </p>
        <h2 ref={el => textRefs.current[1] = el} className="text-large" style={{ marginBottom: '2rem' }}>
          We believe in the beauty<br />of restraint.
        </h2>
        <p ref={el => textRefs.current[2] = el} className="text-medium" style={{ maxWidth: '500px' }}>
          Every piece is thoughtfully designed to transcend trends, 
          crafted with materials that age gracefully, and built to last generations.
        </p>
      </div>
    </section>
  );
};

// Craftsmanship Section
const CraftsmanshipSection = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      featuresRef.current.forEach((feature, i) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Horizontal scroll effect
      gsap.to(sectionRef.current.querySelector('.craftsmanship-track'), {
        xPercent: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { number: '01', title: 'Handcrafted', desc: 'Each piece is meticulously crafted by master artisans' },
    { number: '02', title: 'Premium Materials', desc: 'Sourced from the finest suppliers worldwide' },
    { number: '03', title: 'Timeless Design', desc: 'Created to transcend fleeting trends' },
    { number: '04', title: 'Sustainable', desc: 'Built responsibly for future generations' },
  ];

  return (
    <section ref={sectionRef} className="craftsmanship-section" style={{ padding: 'clamp(6rem, 15vw, 12rem) 0' }}>
      <div className="container">
        <p className="text-eyebrow" style={{ marginBottom: '4rem' }}>Craftsmanship</p>
        <h2 className="text-large" style={{ marginBottom: '6rem' }}>
          Excellence in every detail.
        </h2>
      </div>
      <div className="craftsmanship-track" style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', paddingLeft: 'clamp(1.5rem, 5vw, 4rem)' }}>
        {features.map((feature, i) => (
          <div 
            key={i}
            ref={el => featuresRef.current[i] = el}
            className="craftsmanship-feature"
            style={{
              minWidth: 'clamp(280px, 30vw, 400px)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid #e5e5e5',
            }}
          >
            <span className="text-eyebrow" style={{ display: 'block', marginBottom: '2rem' }}>{feature.number}</span>
            <h3 className="text-medium" style={{ marginBottom: '1rem' }}>{feature.title}</h3>
            <p className="text-small">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Collection Section with Scale Animations
const CollectionSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            end: 'top 40%',
            scrub: true,
          }
        });

        tl.from(item.querySelector('.collection-image'), {
          scale: 0.8,
          rotation: 5,
          duration: 1,
          ease: 'power3.out',
        })
        .from(item.querySelector('.collection-info'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.6');
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { name: 'The Essential', category: 'Signature Collection', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=1500&fit=crop' },
    { name: 'The Minimalist', category: 'Core Line', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=1500&fit=crop' },
    { name: 'The Artisan', category: 'Limited Edition', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&h=1500&fit=crop' },
  ];

  return (
    <section ref={sectionRef} className="collection-section" style={{ padding: 'clamp(6rem, 15vw, 12rem) 0' }}>
      <div className="container">
        <p className="text-eyebrow" style={{ marginBottom: '4rem' }}>Collection</p>
        <h2 className="text-large" style={{ marginBottom: '6rem' }}>
          Curated for the discerning.
        </h2>
      </div>
      <div className="collection-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 400px), 1fr))',
        gap: 'clamp(2rem, 4vw, 4rem)',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
      }}>
        {products.map((product, i) => (
          <div 
            key={i}
            ref={el => itemsRef.current[i] = el}
            className="collection-item"
          >
            <div className="collection-image-wrapper" style={{
              width: '100%',
              aspectRatio: '4/5',
              overflow: 'hidden',
              marginBottom: '2rem',
            }}>
              <img 
                className="collection-image"
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.5s ease',
                }}
                onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
                onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
              />
            </div>
            <div className="collection-info">
              <p className="text-eyebrow" style={{ marginBottom: '0.5rem' }}>{product.category}</p>
              <h3 className="text-medium">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Final CTA Section
const CTASection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom bottom',
          scrub: true,
        }
      });

      tl.from(textRef.current.querySelectorAll('.split-char'), {
        y: '120%',
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section pin-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div className="container">
        <h2 ref={textRef} className="text-huge cta-title">
          {splitText('BEGIN YOUR JOURNEY')}
        </h2>
        <button className="cta-button" style={{
          marginTop: '4rem',
          padding: 'clamp(1rem, 2vw, 1.5rem) clamp(2rem, 4vw, 4rem)',
          background: '#000',
          color: '#fff',
          border: 'none',
          fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, background 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.background = '#1a1a1a';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = '#000';
        }}
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Loading animation
    const loadingTl = gsap.timeline();
    loadingTl.to('.loading-text', {
      opacity: 0,
      duration: 0.8,
      delay: 1.5,
      ease: 'power2.inOut',
      onComplete: () => setLoading(false),
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">A E T H E R</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <CraftsmanshipSection />
        <CollectionSection />
        <CTASection />
      </main>
      <footer style={{
        padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: '1px solid #e5e5e5',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <p className="text-eyebrow" style={{ marginBottom: '1rem' }}>A E T H E R</p>
            <p className="text-small">© 2024 Aether. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" className="text-small" style={{ color: '#000', textDecoration: 'none' }}>Privacy</a>
            <a href="#" className="text-small" style={{ color: '#000', textDecoration: 'none' }}>Terms</a>
            <a href="#" className="text-small" style={{ color: '#000', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
