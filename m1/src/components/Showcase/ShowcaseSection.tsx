"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { showcaseItems } from "@/data/content";

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={containerRef} className="relative bg-slate-950 py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            Projelerimiz
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Başarı Hikayeleri
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Her projemiz, teknoloji ve inovasyonun mükemmel birleşimini yansıtıyor.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={item.id} item={item} index={index} totalItems={showcaseItems.length} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  item,
  index,
  totalItems,
  scrollProgress,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
  totalItems: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const yOffset = useTransform(
    scrollProgress,
    [0, 1],
    [index * 50, -index * 50]
  );
  
  const opacity = useTransform(
    scrollProgress,
    [index / totalItems - 0.1, index / totalItems, index / totalItems + 0.3],
    [0, 1, 0]
  );
  
  const scale = useTransform(
    scrollProgress,
    [index / totalItems - 0.1, index / totalItems, index / totalItems + 0.3],
    [0.9, 1, 0.95]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y: yOffset, opacity, scale }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`mb-12 ${index % 2 === 0 ? "lg:ml-0" : "lg:ml-auto lg:max-w-md"}`}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {item.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mb-6 text-slate-400">{item.description}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(item.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-lg font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">{value}</p>
                <p className="text-xs text-slate-500 capitalize">{key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 blur-xl transition-all duration-500 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20" />
      </div>
    </motion.div>
  );
}
