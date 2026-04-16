import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our concierge will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-info"
          style={{ opacity, y }}
        >
          <h2 className="section-title">
            Begin Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Schedule a private viewing or speak with our automotive specialists
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Showroom</span>
              <span className="contact-value">9876 Luxury Lane, Beverly Hills, CA 90210</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Concierge</span>
              <span className="contact-value">+1 (888) PRESTIGE</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">concierge@prestigemotors.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Hours</span>
              <span className="contact-value">Mon-Sat: 10AM - 7PM | Sun: By Appointment</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-effect"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Area of Interest</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="luxury-sedan">Luxury Sedan</option>
                <option value="sports-coupe">Sports Coupe</option>
                <option value="suv">Luxury SUV</option>
                <option value="convertible">Convertible</option>
                <option value="hypercar">Hypercar</option>
                <option value="custom">Custom Order</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your dream vehicle..."
            />
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Consultation
          </motion.button>
        </motion.form>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, var(--bg-dark) 100%);
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .contact-info {
          padding-top: 2rem;
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
          margin-bottom: 3rem;
        }

        .contact-details {
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .contact-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .contact-value {
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
        }

        .social-links {
          display: flex;
          gap: 2rem;
        }

        .social-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
          transition: color 0.3s ease;
        }

        .social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .social-link:hover {
          color: #fff;
        }

        .social-link:hover::after {
          width: 100%;
        }

        .contact-form {
          padding: 3rem;
          border-radius: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .form-group select {
          cursor: pointer;
        }

        .form-group select option {
          background: var(--bg-dark);
          color: #fff;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          width: 100%;
          padding: 1.25rem;
          background: var(--accent);
          color: var(--bg-dark);
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover {
          background: #d4b978;
          box-shadow: 0 0 30px rgba(201, 169, 98, 0.4);
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-info {
            text-align: center;
          }

          .contact-details {
            display: inline-block;
            text-align: left;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
