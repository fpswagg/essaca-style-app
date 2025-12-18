# ESSACA App - Biophilic Nature Style

## Overview

The Biophilic Nature style celebrates the intrinsic connection between architecture and the natural world, drawing inspiration from organic forms, natural patterns, and biophilic design principles. This style features flowing curves, natural textures, and earthy color palettes that evoke the beauty of nature while maintaining architectural sophistication. The design philosophy emphasizes harmony with the environment, organic growth patterns, and the healing power of natural design.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Layout & Spacing](#layout--spacing)
4. [Component Styling](#component-styling)
5. [Custom CSS Classes](#custom-css-classes)
6. [Responsive Design](#responsive-design)
7. [Utility Functions](#utility-functions)
8. [Design Patterns](#design-patterns)

---

## Color System

### Brand Colors

The application uses an organic, nature-inspired color palette with earthy and botanical tones:

#### Primary Colors
- **Page Background (Sage Green)**: `#E8F5E8` - `--color-page` / `bg-page`
- **Main Text (Forest Green)**: `#2F4F2F` - `--color-main` / `text-main`
- **Olive Green (Primary)**: `#6B8E23` - `--color-olive` / `bg-olive` / `text-olive`
- **Earth Brown (Secondary)**: `#8B7355` - `--color-earth` / `bg-earth` / `text-earth`
- **Card Background (Cream)**: `#F5F5DC` - `--color-cream` / `bg-cream`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(120, 25, 93)` - Maps to sage green
- **Foreground**: `hsl(120, 20, 27)` - Maps to forest green
- **Primary**: `hsl(80, 55, 35)` - Maps to olive green
- **Secondary**: `hsl(30, 25, 45)` - Maps to earth brown
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(60, 20, 92)` - Subtle backgrounds
- **Border**: `hsl(60, 15, 88)` - Light cream borders
- **Input**: `hsl(60, 15, 88)` - Input borders
- **Ring**: `hsl(80, 55, 35)` - Focus rings (olive green)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (sage green)
className="bg-cream"       // Card/container background (cream)
className="bg-olive"       // Primary accent background
className="bg-earth"       // Secondary accent background

// Text colors
className="text-main"           // Primary text (forest green)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-olive"          // Accent text
className="text-earth"          // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-olive"         // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that evoke natural harmony and organic flow:

1. **Display Font**: Cormorant Garamond (serif) or Georgia (fallback)
   - Weights: 400 (regular), 600 (semibold)
   - Styles: normal, italic
   - Used for: Headings, organic display text, nature-inspired elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(52px, 6vw, 88px)` - Flowing, organic display text
  - Line height: 1.1
  - Font weight: 600 (semibold)
  - Font family: Display font
  - Letter spacing: -0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, letter spacing -0.01em
- **Display Emphasis**: Italic, weight 400
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.7 (for general text), 1.8 (for nature descriptions)
- Letter spacing: 0.01em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 24px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-cream)`
  - `border: 2px solid rgba(107, 142, 35, 0.2)`
  - `box-shadow: 0 8px 32px rgba(107, 142, 35, 0.1)`

### Spacing
- Organic spacing inspired by natural growth patterns
- Generous, breathing layouts that mimic natural forms
- Flowing arrangements reminiscent of plant growth

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 20px`
  - `font-size: 15px`
  - `font-weight: 500`
  - `letter-spacing: 0.01em`
  - `text-transform: none`
  - `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background: linear-gradient(135deg, var(--color-olive), var(--color-earth))`
  - `color: var(--color-cream)`
  - `border: none`
  - Hover: `transform: translateY(-4px)`, `box-shadow: 0 16px 32px rgba(107, 142, 35, 0.3)`
  - Active: `transform: translateY(-2px)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-olive)`
  - `border: 2px solid var(--color-olive)`
  - Hover: `background-color: var(--color-olive)`, `color: var(--color-cream)`, `transform: scale(1.05)`
  - Active: `transform: scale(1)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-olive)`, `transform: translateY(-2px)`
  - Active: `transform: translateY(0)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-cream)`
  - `border: 1px solid rgba(107, 142, 35, 0.15)`
  - `border-radius: 24px`
  - `padding: 2.5rem`
  - `position: relative`
  - `box-shadow: 0 4px 16px rgba(107, 142, 35, 0.08)`
  - Hover: `transform: translateY(-8px) rotate(-1deg)`, `box-shadow: 0 20px 40px rgba(107, 142, 35, 0.15)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 2rem`
  - `padding-bottom: 1.5rem`
  - `border-bottom: 2px solid var(--color-olive)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 600`
  - `font-size: 1.75rem` (desktop: `2rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(47, 79, 47, 0.75)`
  - `font-size: 0.9rem` (desktop: `1rem`)
  - `line-height: 1.8`
  - `letter-spacing: 0.01em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.75rem`
  - `border-radius: 16px`
  - `border: 2px solid rgba(107, 142, 35, 0.2)`
  - `background-color: var(--color-cream)`
  - `color: var(--color-main)`
  - `padding: 0.625rem 1rem`
  - Focus: `outline: none`, `border-color: var(--color-olive)`, `border-width: 3px`, `transform: scale(1.02)`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.organic-header`**: Flowing nature-inspired header
- **`.growth-section`**: Organic content sections
- **`.leaf-pattern`**: Natural leaf and plant patterns
- **`.flowing-layout`**: Organic arrangement utilities

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Organic layouts that naturally adapt to different screens
- Touch interactions inspired by natural movements

---

## Utility Functions

- Standard Tailwind utility classes for organic layouts
- Custom utility classes for nature colors (`bg-olive`, `text-earth`, `border-forest`, etc.)
- Organic animation and transition utilities

---

## Design Patterns

- **Organic Flow**: Natural, plant-like growth patterns
- **Biophilic Harmony**: Connection between design and nature
- **Natural Forms**: Curved, organic shapes and layouts
- **Earthy Balance**: Grounded, sustainable design principles
- **Growth Patterns**: Expanding, evolving layouts
- **Natural Rhythms**: Flowing, rhythmic animations

---

## Implementation Example

```tsx
// Biophilic Nature Hero Section
<div className="hero-section bg-page relative overflow-hidden">
  <div className="leaf-pattern absolute inset-0 opacity-10"></div>
  <div className="hero-content-wrapper">
    <motion.h1
      className="text-display text-main mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Architecture <span className="text-display-emphasis">Naturelle</span>
    </motion.h1>
    <motion.p
      className="text-main-70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      L'harmonie entre l'architecture et le monde naturel
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <button className="btn-cta">Explorer la nature</button>
      <button className="btn-secondary">Projets durables</button>
    </motion.div>
  </div>
  <div className="organic-shapes">
    <div className="floating-leaf bg-olive opacity-20"></div>
    <div className="flowing-vine border-olive opacity-30"></div>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with CSS animations and transforms
- Progressive enhancement for older browsers
- Optimized for organic, natural experiences

---

## Performance Considerations

- Smooth organic animations
- Efficient natural pattern rendering
- Optimized for biophilic content
- Lightweight nature-inspired elements

---

## Accessibility Features

- Natural color schemes for visual comfort
- Clear organic typography
- Intuitive navigation with natural flow
- High contrast maintained in natural palettes

---

## Customization Options

- Seasonal nature themes (spring, summer, autumn, winter)
- Regional plant adaptations
- Growth animation intensity
- Natural element density controls

---

## Future Enhancements

- Interactive plant growth animations
- Seasonal theme adaptations
- Weather-responsive natural elements
- Biophilic environment integrations
