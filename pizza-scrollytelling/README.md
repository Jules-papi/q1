# Bella Pizza - Scrollytelling Website

A modern, interactive pizza ordering website featuring scrollytelling design patterns.

## Features

### 🍕 **Scrollytelling Experience**
- Interactive story section that reveals content as you scroll
- Animated pizza creation process (base → sauce → cheese → toppings → oven → delivery)
- Sticky visual stage with changing content tracks

### 🎨 **Design Elements**
- Modern gradient backgrounds
- Smooth scroll animations
- Responsive navigation with scroll effects
- CSS-based pizza and oven animations
- Mobile-friendly responsive design

### 🛒 **Ordering System**
- Custom pizza builder with:
  - 4 size options (Small, Medium, Large, XL)
  - 4 crust types (Thin, Thick, Cheese Stuffed, Gluten-Free)
  - 10 topping choices (max 5 per pizza)
  - Quantity selector
  - Special instructions field
- Real-time price calculation
- First 3 toppings free, additional toppings $1.50 each
- Order confirmation with summary

### 📱 **Sections**
1. **Hero** - Eye-catching landing with call-to-action
2. **Our Story** - Scrollytelling section with 4-step brand story
3. **How It Works** - 4-step ordering process
4. **Menu** - Signature pizza offerings
5. **Order Now** - Custom pizza builder form
6. **Footer** - Contact information and hours

## Files Structure

```
pizza-scrollytelling/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling and animations
└── script.js       # Interactive functionality
```

## How to Use

1. Open `index.html` in any modern web browser
2. Scroll through the story section to experience the scrollytelling
3. Navigate using the fixed navbar
4. Build your custom pizza in the order section
5. Submit to see your order confirmation

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Intersection Observer API
- Sticky positioning for scrollytelling effect

## Key Scrollytelling Implementation

The scrollytelling section uses:
- A 400vh tall container (4 viewport heights for 4 steps)
- Sticky positioning to keep visuals in view
- Scroll progress calculation to determine active step
- CSS transitions for smooth visual changes
- Opacity-based content activation

---

**Enjoy building your perfect pizza! 🍕**
