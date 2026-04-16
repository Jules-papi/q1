'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Skyline Penthouse',
    category: 'Lüks Konut',
    location: 'İstanbul, Beşiktaş',
    area: '450 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Boğaz manzaralı penthouse daire için fütüristik ve minimalist tasarım.',
  },
  {
    title: 'Tech Hub Ofis',
    category: 'Ofis',
    location: 'İstanbul, Levent',
    area: '2500 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Teknoloji şirketi için akıllı ve sürdürülebilir ofis tasarımı.',
  },
  {
    title: 'Aurora Villa',
    category: 'Villa',
    location: 'Bodrum, Yalıkavak',
    area: '800 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'Deniz kenarında ultra lüks akıllı villa projesi.',
  },
  {
    title: 'Nexus Showroom',
    category: 'Ticari',
    location: 'İstanbul, Nişantaşı',
    area: '600 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    description: 'Premium otomobil markası için etkileyici showroom deneyimi.',
  },
  {
    title: 'Zenith Residence',
    category: 'Konut',
    location: 'İzmir, Alsancak',
    area: '320 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    description: 'Modern yaşam için optimize edilmiş akıllı konut tasarımı.',
  },
  {
    title: 'Pulse Lounge',
    category: 'Restoran',
    location: 'İstanbul, Karaköy',
    area: '400 m²',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    description: 'Gece hayatı ve fine dining için immersive mekan tasarımı.',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isActive: boolean;
}

function ProjectCard({ project, index, isActive }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      className="relative group flex-shrink-0 w-full md:w-[400px] lg:w-[450px]"
      style={{
        scale,
        opacity,
        y,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="glass rounded-2xl overflow-hidden border border-white/10 relative">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-medium text-white">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {project.area}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {project.year}
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/10 to-transparent" />

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-sm text-primary-200">Portfolyo</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Seçkin Projeler</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Her biri özgün bir hikaye anlatan, teknoloji ve estetiğin buluştuğu 
          imza projelerimiz.
        </motion.p>
      </div>

      {/* 3D Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-8 justify-center"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="relative max-w-7xl mx-auto mt-12 flex justify-center gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-primary-500 w-8'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
