"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";
import { useMagnetic } from "@/hooks/useMagnetic";

export function FeaturesSection() {
  return (
    <section className="relative bg-slate-950 py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Hizmetlerimiz
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Teknoloji ile Geleceği Şekillendiriyoruz
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            En son teknolojileri kullanarak işletmenizi dijital dönüşüme hazırlıyoruz.
            Her biri alanında uzman çözümlerimizle tanışın.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useMagnetic({ intensity: 0.3, range: 100 });

  return (
    <motion.div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        rotateY: 3,
        transition: { duration: 0.3 },
      }}
      className="group relative"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />

      {/* Card content */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20">
        {/* Icon */}
        <motion.div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-3xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>

        {/* Description */}
        <p className="mb-6 text-slate-400">{service.description}</p>

        {/* Features list */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <svg
                className="h-4 w-4 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Hover arrow */}
        <motion.div
          className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
