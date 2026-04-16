'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CEO, TechVision',
    content: 'Dilek Hanım\'ın teknoloji odaklı tasarım yaklaşımı, ofisimizin hem estetik hem de fonksiyonel açıdan mükemmel olmasını sağladı. Çalışma verimliliğimiz %40 arttı.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    name: 'Elif Demir',
    role: 'Kurucu, Startup Hub',
    content: 'Fütüristik vizyonu ve detaylara gösterdiği özen sayesinde hayalimizdeki çalışma alanını yarattı. Sürekli değişen ihtiyaçlarımıza esnek çözümler üretti.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    name: 'Mehmet Kaya',
    role: 'Yatırımcı',
    content: 'Villa projemizde beklediğimizin çok ötesinde bir sonuç aldık. Akıllı ev entegrasyonu ve sürdürülebilir tasarım mükemmel uyum içinde.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
  },
  {
    name: 'Ayşe Özdemir',
    role: 'Restoran Sahibi',
    content: 'Mekanımızın atmosferi tamamen değişti. Müşterilerimiz sürekli tasarımı soruyor ve fotoğraf çekiyor. İşletme başarımıza doğrudan katkı sağladı.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
  },
];

const stats = [
  { value: '200+', label: 'Tamamlanan Proje' },
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '50+', label: 'Ödül & Başarı' },
  { value: '100%', label: 'Müşteri Memnuniyeti' },
];

const partners = [
  'Vitra', 'Artemide', 'Herman Miller', 'Knoll', 'Flos', 'B&B Italia',
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent" />

      {/* Stats section */}
      <div className="relative max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center glass rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span className="text-sm text-accent-200">Referanslar</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Müşterilerimiz Ne Diyor?</span>
        </motion.h2>
      </div>

      {/* Testimonials grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden h-full">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif">"</div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Partner logos */}
      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          ÇALIŞTIĞIMIZ PREMIUM MARKALAR
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
