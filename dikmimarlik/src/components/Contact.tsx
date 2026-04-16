'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Magnetic } from '@/hooks/useMagnetic';

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <motion.div
        style={{ opacity, y }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm text-primary-200">İletişim</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Hayalinizi Birlikte Tasarlayalım</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Projeniz için ücretsiz konsültasyon alın. 
            Size özel çözümler sunmak için buradayız.
          </motion.p>
        </div>

        {/* Contact form card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-600/10 opacity-50" />
          
          {/* Content */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-900">Seçiniz</option>
                    <option value="smart-home" className="bg-gray-900">Akıllı Ev Sistemleri</option>
                    <option value="office" className="bg-gray-900">Ofis Tasarımı</option>
                    <option value="villa" className="bg-gray-900">Villa / Konut</option>
                    <option value="commercial" className="bg-gray-900">Ticari Mekan</option>
                    <option value="other" className="bg-gray-900">Diğer</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                  placeholder="Projenizden bahsedin..."
                  required
                />
              </div>

              {/* Submit button */}
              <Magnetic intensity={0.6} range={120}>
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Teklif Alın
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Magnetic>
            </form>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <p className="text-white font-medium">+90 212 XXX XX XX</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">E-posta</p>
                  <p className="text-white font-medium">info@dkicmimarlik.com</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">Adres</p>
                  <p className="text-white font-medium">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
