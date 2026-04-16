'use client';

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Showcase } from '@/components/Showcase';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

export default function Home() {
  // Initialize smooth scroll
  useLenis();

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            DK İç Mimarlık
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Ana Sayfa
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Hizmetler
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Projeler
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Hakkımızda
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
              İletişim
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
