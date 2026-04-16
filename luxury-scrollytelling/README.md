# A E T H E R — Luxury Scrollytelling Landing Page

A high-end scrollytelling landing page built with React and GSAP ScrollTrigger, featuring "Quiet Luxury" aesthetics inspired by Apple product pages.

## Features

### Smooth Scroll Experience
- **Lenis** smooth inertial scrolling for buttery-smooth scroll feel
- Synchronized with GSAP ScrollTrigger for seamless animations

### Scroll-Bound Animations
- Elements scale, rotate, and morph based on scroll progress
- Not just fade-ins—dynamic transformations tied to scroll position
- Split-text reveal animations for typography

### Pinned Sections
- Main product visual pins in center while text content scrolls past
- Parallax effects on imagery
- Multi-stage pinned storytelling sections

### Typography
- Large, bold, sophisticated sans-serif typography (Inter font)
- Character-by-character tracking animations
- Responsive fluid typography using clamp()

### Transitions
- Seamless section transitions
- Split-text reveal animations
- Staggered element reveals

### Visual Style
- Minimalist #FFFFFF background
- #000000 text
- High-quality whitespace
- Professional architectural photography aesthetic
- Grayscale imagery with color reveal on interaction

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **ScrollTrigger** - Scroll-based animations plugin
- **Lenis** - Smooth scroll library

## Getting Started

### Installation

```bash
cd luxury-scrollytelling
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or next available port).

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
luxury-scrollytelling/
├── index.html              # Entry HTML with font imports
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application with all sections
    ├── index.css           # Global styles and utilities
    └── App.css             # Component-specific styles
```

## Sections

1. **Hero Section** - Full-screen intro with animated headline "LESS BUT BETTER"
2. **Philosophy Section** - Pinned image with scrolling text overlay
3. **Craftsmanship Section** - Horizontal scroll effect with feature cards
4. **Collection Section** - Product showcase with scale/rotation animations
5. **CTA Section** - Final call-to-action with split-text animation

## Key Animations

- **Hero Reveal**: Staggered character-by-character title animation
- **Philosophy Pin**: Image scales from 1.2 to 1.0 while transitioning from grayscale to color
- **Text Reveals**: Content slides up with opacity fade as you scroll
- **Collection Items**: Products scale and rotate into view
- **CTA Finale**: Large headline with split-text reveal

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
background: #FFFFFF;
color: #000000;
```

### Images
Replace Unsplash URLs in `src/App.jsx` with your own architectural photography.

### Typography
Change the Google Font import in `index.html` and update font-family in CSS.

### Animation Timing
Adjust GSAP timeline durations and eases in `src/App.jsx` useEffect hooks.

## Performance Notes

- Uses `gsap.context()` for proper cleanup
- Lenis is properly synced with ScrollTrigger
- Includes reduced-motion media query for accessibility
- Images use object-fit for responsive scaling

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for reduced-motion preferences
- Mobile-responsive design

---

Built with ♥ for quiet luxury enthusiasts.
