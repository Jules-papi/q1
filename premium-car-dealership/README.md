# Prestige Motors - Premium Car Dealership Website

A high-end, scroll-driven immersive website for a premium car dealership featuring 3D exploding layers effect with physics-based animations.

## Features

### Core Mechanics
- **Smooth Scroll**: Inertial scrolling using Lenis for buttery-smooth experience
- **Scroll-Bound Animations**: Elements scale, rotate, and morph based on scroll progress using Framer Motion
- **3D Exploding Layers**: 7 layered UI elements separate along Z-axis with perspective transforms
- **Pinned Sections**: Content sections with scroll-triggered reveals
- **Magnetic Cursor**: Custom cursor that responds to interactive elements
- **GPU-Accelerated**: All animations use CSS transforms for optimal performance

### Visual Style
- Minimalist dark theme (#0a0a0a background)
- Gold accent color (#c9a962)
- Glassmorphism effects with backdrop blur
- Large, bold Inter typography with sophisticated tracking
- Professional automotive photography aesthetic

### Sections
1. **Hero with Exploding 3D Layers** - Interactive 7-layer visualization that separates as you scroll
2. **Features/Services** - Depth-reveal cards with hover effects
3. **Gallery/Showcase** - Scroll-triggered 3D carousel with auto-rotation
4. **Trust/Testimonials** - Client testimonials with staggered reveals
5. **Contact/Action** - Floating glass UI contact form

## Tech Stack
- React 19
- Framer Motion (scroll animations)
- Lenis (smooth scrolling)
- Vite (build tool)
- CSS Modules with JSX styles

## Getting Started

### Installation
```bash
cd premium-car-dealership
npm install
```

### Development
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or next available port)

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
premium-car-dealership/
├── src/
│   ├── components/
│   │   ├── ExplodingLayers.jsx    # Hero with 3D layer explosion effect
│   │   ├── FeaturesSection.jsx    # Services/features cards
│   │   ├── GallerySection.jsx     # 3D carousel showcase
│   │   ├── TestimonialsSection.jsx # Client testimonials
│   │   ├── ContactSection.jsx     # Contact form
│   │   ├── Navigation.jsx         # Fixed navigation
│   │   └── MagneticCursor.jsx     # Custom cursor
│   ├── hooks/
│   │   └── useSmoothScroll.js     # Lenis integration
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Key Animation Techniques

### 3D Exploding Layers
```javascript
const zTranslate = useTransform(scrollYProgress, [0, 1], [0, 150 + index * 80]);
const rotateX = useTransform(scrollYProgress, [0, 1], [layer.rotateX, layer.rotateX + 20]);
const rotateY = useTransform(scrollYProgress, [0, 1], [layer.rotateY, layer.rotateY - 20]);
```

### Scroll-Triggered Reveals
```javascript
const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
```

### Spring Physics
```javascript
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});
```

## Responsive Design
- Mobile-first approach
- Fluid typography with clamp()
- Adaptive layouts for tablet and desktop
- Touch-optimized interactions on mobile
- Custom cursor disabled on touch devices

## Performance Optimizations
- GPU-accelerated CSS transforms
- Lazy-loaded images
- Efficient scroll event handling via Lenis
- Minimal re-renders with React best practices
- Backdrop filter for glassmorphism effects

## Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## License
MIT
