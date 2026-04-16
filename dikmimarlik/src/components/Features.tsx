'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Akıllı Ev Sistemleri',
    description: 'IoT entegrasyonlu, ses kontrollü ve otomasyon destekli yaşam alanları tasarlıyoruz. Teknoloji ve konforun mükemmel uyumu.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Fütüristik Ofis Tasarımı',
    description: 'Üretkenliği artıran, esnek çalışma alanları. Modüler mobilyalar, akustik çözümler ve biyofilik tasarım elementleri.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Sürdürülebilir Çözümler',
    description: 'Çevre dostu malzemeler, enerji verimli aydınlatma sistemleri ve geri dönüştürülebilir elementlerle yeşil tasarım.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: '3D Görselleştirme',
    description: 'Projenizi gerçeğe dönüşmeden önce deneyimleyin. Fotorealistik renderlar ve sanal gerçeklik turları.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Lüks Konut Projeleri',
    description: 'Özel villalar, penthouse daireler ve waterfront residences için kişiye özel, prestijli tasarımlar.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Ticari Mekanlar',
    description: 'Mağazalar, showroomlar, restoranlar ve oteller için marka kimliğinizi yansıtan etkileyici tasarımlar.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: 'from-indigo-500 to-blue-600',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      className="relative group perspective-1000"
      style={{
        y,
        opacity,
        scale,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="glass rounded-2xl p-8 h-full border border-white/10 overflow-hidden relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Border glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">{service.description}</p>

          {/* Arrow indicator */}
          <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Detaylı Bilgi</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent" />

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
          <span className="text-sm text-accent-200">Hizmetlerimiz</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Geleceği Tasarlıyoruz</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Teknolojiyi estetikle buluşturarak, yaşam alanlarınızı bir üst seviyeye taşıyoruz.
          Her proje, özgün bir vizyon ve kusursuz detaylarla şekilleniyor.
        </motion.p>
      </div>

      {/* Services grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
