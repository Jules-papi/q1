'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic } from '@/hooks/useMagnetic';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for each layer
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Z-axis explosion transforms
  const layer1Z = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer2Z = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const layer4Z = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const layer5Z = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Rotation for cinematic effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  // Opacity and blur for depth
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);
  const opacity5 = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

  const blur1 = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const blur2 = useTransform(scrollYProgress, [0, 0.4], [12, 0]);
  const blur3 = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const blur4 = useTransform(scrollYProgress, [0, 0.6], [8, 0]);
  const blur5 = useTransform(scrollYProgress, [0, 0.7], [5, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background gradient orb */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/30 via-transparent to-transparent opacity-60" />
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: 'translateZ(-100px)',
        }}
      />

      {/* Exploding Layers Container */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto px-6 py-20"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        {/* Layer 1 - Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-accent-600/20 to-primary-900/30 rounded-3xl"
          style={{
            y: layer1Y,
            z: layer1Z,
            opacity: opacity1,
            filter: useTransform(blur1, (b) => `blur(${b}px)`),
          }}
        />

        {/* Layer 2 - Geometric Pattern */}
        <motion.div
          className="absolute inset-8 border border-white/10 rounded-2xl"
          style={{
            y: layer2Y,
            z: layer2Z,
            opacity: opacity2,
            filter: useTransform(blur2, (b) => `blur(${b}px)`),
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          }}
        />

        {/* Layer 3 - Glass Panel */}
        <motion.div
          className="absolute inset-16 glass-strong rounded-xl"
          style={{
            y: layer3Y,
            z: layer3Z,
            opacity: opacity3,
            filter: useTransform(blur3, (b) => `blur(${b}px)`),
          }}
        />

        {/* Layer 4 - Content Layer */}
        <motion.div
          className="relative z-10 text-center"
          style={{
            y: layer4Y,
            z: layer4Z,
            opacity: opacity4,
            filter: useTransform(blur4, (b) => `blur(${b}px)`),
          }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm text-primary-200">Fütüristik İç Mimarlık</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text glow-text">
              İç Mimar Dilek
            </span>
            <br />
            <span className="text-white">Karaman</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Teknoloji ve estetiğin mükemmel buluşması. 
            Akıllı yaşam alanları, fütüristik tasarımlar ve sürdürülebilir çözümlerle 
            geleceğin iç mimarisini bugünden şekillendiriyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnetic intensity={0.6} range={120}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105">
                <span className="relative z-10">Projeleri Keşfet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Magnetic>

            <Magnetic intensity={0.6} range={120}>
              <button className="px-8 py-4 glass rounded-full font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                İletişime Geç
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Layer 5 - Floating UI Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: layer5Y,
            z: layer5Z,
            opacity: opacity5,
            filter: useTransform(blur5, (b) => `blur(${b}px)`),
          }}
        >
          {/* Floating card top-right */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-10 md:right-20 glass p-4 rounded-xl w-48 hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Akıllı Tasarım</p>
                <p className="text-sm font-semibold text-white">AI Destekli</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card bottom-left */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 left-10 md:left-20 glass p-4 rounded-xl w-56 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Premium Projeler</p>
                <p className="text-sm font-semibold text-white">200+ Tamamlandı</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
