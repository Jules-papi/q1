"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExplodingLayer } from "./ExplodingLayer";
import { useMagnetic } from "@/hooks/useMagnetic";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useMagnetic({ intensity: 0.6, range: 150 });
  const secondaryButtonRef = useMagnetic({ intensity: 0.4, range: 120 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for floating elements
  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"
        style={{ opacity: heroOpacity }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 3D Exploding Layers Container */}
      <motion.div
        className="relative z-10 flex h-screen items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          opacity: heroOpacity,
          scale: heroScale,
        }}
      >
        {/* Layer 1 - Background glow */}
        <ExplodingLayer index={0} totalLayers={7} scrollProgress={scrollYProgress}>
          <div className="h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[100px]" />
        </ExplodingLayer>

        {/* Layer 2 - Decorative ring */}
        <ExplodingLayer index={1} totalLayers={7} scrollProgress={scrollYProgress}>
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full border border-indigo-500/20"
            style={{ y: floatY1 }}
          />
        </ExplodingLayer>

        {/* Layer 3 - Floating UI element left */}
        <ExplodingLayer index={2} totalLayers={7} scrollProgress={scrollYProgress}>
          <motion.div
            className="absolute left-[20%] top-[30%] rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
            style={{ y: floatY2 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <span className="text-xl">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Proje Tamamlandı</p>
                <p className="text-xs text-white/60">500+ Başarılı Delivery</p>
              </div>
            </div>
          </motion.div>
        </ExplodingLayer>

        {/* Layer 4 - Main content */}
        <ExplodingLayer index={3} totalLayers={7} scrollProgress={scrollYProgress}>
          <div className="relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Geleceğin Teknolojisi Bugün Burada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
            >
              İç Mimar Dilek
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Karaman
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl"
            >
              DK İç Mimarlık olarak teknoloji ve tasarımı birleştiriyor, 
              akıllı yaşam alanları ve dijital deneyimler yaratıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div ref={primaryButtonRef as React.RefObject<HTMLDivElement>}>
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
                  <span className="relative z-10">Projelerimizi Keşfedin</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </div>

              <div ref={secondaryButtonRef as React.RefObject<HTMLDivElement>}>
                <button className="group rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
                  <span className="flex items-center gap-2">
                    İletişime Geçin
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </ExplodingLayer>

        {/* Layer 5 - Floating UI element right */}
        <ExplodingLayer index={4} totalLayers={7} scrollProgress={scrollYProgress}>
          <motion.div
            className="absolute right-[20%] top-[40%] rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
            style={{ y: floatY3 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">%98 Memnuniyet</p>
                <p className="text-xs text-white/60">Müşteri Oranı</p>
              </div>
            </div>
          </motion.div>
        </ExplodingLayer>

        {/* Layer 6 - Outer ring */}
        <ExplodingLayer index={5} totalLayers={7} scrollProgress={scrollYProgress}>
          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full border border-purple-500/10"
            style={{ y: floatY1 }}
          />
        </ExplodingLayer>

        {/* Layer 7 - Ambient particles */}
        <ExplodingLayer index={6} totalLayers={7} scrollProgress={scrollYProgress}>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </ExplodingLayer>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        style={{ opacity: heroOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
