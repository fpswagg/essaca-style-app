# ESSACA App - Urban Concrete Style

## Overview

The Urban Concrete style embodies the raw, industrial aesthetic of modern urban architecture, drawing inspiration from brutalist concrete structures, industrial design, and the stark beauty of urban landscapes. This style features exposed concrete textures, geometric forms, and a monochromatic palette that reflects the strength and authenticity of architectural materials. The design philosophy emphasizes structural integrity, material honesty, and the beauty of functional design.

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

The application uses a stark, industrial color palette dominated by concrete and steel tones:

#### Primary Colors
- **Page Background (Concrete Gray)**: `#E8E8E8` - `--color-page` / `bg-page`
- **Main Text (Charcoal)**: `#2D3748` - `--color-main` / `text-main`
- **Steel Blue (Primary)**: `#4A5568` - `--color-steel` / `bg-steel` / `text-steel`
- **Concrete Dark (Secondary)**: `#718096` - `--color-concrete` / `bg-concrete` / `text-concrete`
- **Card Background (Off-White)**: `#F7FAFC` - `--color-card` / `bg-card`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(210, 17, 91)` - Maps to concrete gray
- **Foreground**: `hsl(215, 25, 27)` - Maps to charcoal
- **Primary**: `hsl(215, 16, 36)` - Maps to steel blue
- **Secondary**: `hsl(215, 20, 44)` - Maps to concrete dark
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(210, 17, 95)` - Subtle backgrounds
- **Border**: `hsl(214, 15, 91)` - Light gray borders
- **Input**: `hsl(214, 15, 91)` - Input borders
- **Ring**: `hsl(215, 16, 36)` - Focus rings (steel blue)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (concrete gray)
className="bg-card"        // Card/container background (off-white)
className="bg-steel"       // Primary accent background
className="bg-concrete"    // Secondary accent background

// Text colors
className="text-main"           // Primary text (charcoal)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-steel"          // Accent text
className="text-concrete"       // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-steel"         // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that emphasize industrial strength and clarity:

1. **Display Font**: IBM Plex Mono (monospace) or Courier New (fallback)
   - Weights: 400 (regular), 600 (semibold)
   - Styles: normal
   - Used for: Headings, technical display text, industrial elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 96px)` - Bold, structural display text
  - Line height: 1.1
  - Font weight: 600 (semibold)
  - Font family: Display font
  - Letter spacing: 0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, letter spacing 0.01em
- **Display Emphasis**: Font weight 400, letter spacing 0.03em
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.6 (for general text), 1.7 (for industrial content)
- Letter spacing: 0.02em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 0`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-card)`
  - `border: 3px solid var(--color-steel)`
  - `box-shadow: 6px 6px 0 var(--color-main)`

### Spacing
- Industrial spacing with structural precision
- Grid-based layouts inspired by concrete forms
- Minimal but purposeful white space

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 0`
  - `font-size: 14px`
  - `font-weight: 600`
  - `letter-spacing: 0.03em`
  - `text-transform: uppercase`
  - `transition: all 0.15s ease`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background-color: var(--color-steel)`
  - `color: var(--color-card)`
  - `border: 3px solid var(--color-steel)`
  - Hover: `transform: translate(3px, 3px)`, `box-shadow: 3px 3px 0 var(--color-main)`
  - Active: `transform: translate(6px, 6px)`, `box-shadow: 0 0 0 var(--color-main)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: var(--color-card)`
  - `border: 3px solid var(--color-steel)`
  - `color: var(--color-steel)`
  - Hover: `background-color: var(--color-steel)`, `color: var(--color-card)`
  - Active: `transform: translate(3px, 3px)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: 2px solid transparent`
  - `border-bottom: 3px solid var(--color-steel)`
  - Hover: `border: 3px solid var(--color-steel)`, `transform: translateY(3px)`
  - Active: `transform: translateY(6px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-card)`
  - `border: 3px solid var(--color-steel)`
  - `border-radius: 0`
  - `padding: 2rem`
  - `position: relative`
  - `box-shadow: 6px 6px 0 var(--color-main)`
  - Hover: `transform: translate(-3px, -3px)`, `box-shadow: 9px 9px 0 var(--color-main)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 1.5rem`
  - `padding-bottom: 1rem`
  - `border-bottom: 3px solid var(--color-steel)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 600`
  - `font-size: 1.5rem` (desktop: `1.75rem`)
  - `color: var(--color-main)`
  - `letter-spacing: 0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(45, 55, 72, 0.7)`
  - `font-size: 0.875rem` (desktop: `1rem`)
  - `line-height: 1.7`
  - `letter-spacing: 0.02em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.5rem`
  - `border-radius: 0`
  - `border: 3px solid var(--color-steel)`
  - `background-color: var(--color-card)`
  - `color: var(--color-main)`
  - `padding: 0.5rem 0.75rem`
  - Focus: `outline: none`, `border-color: var(--color-concrete)`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.industrial-header`**: Raw concrete header styling
- **`.structural-section`**: Grid-based content sections
- **`.concrete-texture`**: Concrete background textures
- **`.urban-grid`**: Industrial grid patterns

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Industrial layouts that maintain structural integrity
- Touch interactions optimized for concrete-like precision

---

## Utility Functions

- Standard Tailwind utility classes for industrial layouts
- Custom utility classes for concrete colors (`bg-steel`, `text-concrete`, `border-charcoal`, etc.)
- Structural utility classes for industrial design

---

## Design Patterns

- **Structural Integrity**: Strong, functional layouts
- **Material Honesty**: Authentic concrete and industrial aesthetics
- **Geometric Precision**: Clean lines and measured proportions
- **Urban Authenticity**: Raw, unpretentious design
- **Industrial Strength**: Robust, durable visual elements
- **Minimal Complexity**: Simple forms with maximum impact

---

## Implementation Example

```tsx
// Urban Concrete Hero Section
<div className="hero-section bg-page relative">
  <div className="concrete-texture absolute inset-0 opacity-20"></div>
  <div className="hero-content-wrapper">
    <h1 className="text-display text-main mb-6">
      Architecture <span className="text-display-emphasis">Urbaine</span>
    </h1>
    <p className="text-main-70 text-lg max-w-2xl mb-8 leading-relaxed">
      La force et l'authenticité des matériaux modernes
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="btn-cta">Construire l'avenir</button>
      <button className="btn-secondary">Nos projets</button>
    </div>
  </div>
  <div className="urban-grid absolute bottom-0 left-0 right-0 h-20 opacity-10"></div>
</div>
```

---

## Browser Support

- Modern browsers with CSS transforms
- Progressive enhancement for older browsers
- Optimized for industrial, functional experiences

---

## Performance Considerations

- Efficient CSS for structural layouts
- Optimized concrete texture rendering
- Fast loading of industrial design elements
- Minimal animation overhead

---

## Accessibility Features

- High contrast for industrial readability
- Clear structural navigation
- Keyboard navigation with industrial precision
- Focus indicators with concrete-inspired colors

---

## Customization Options

- Material variations (concrete, steel, brick)
- Urban density controls
- Industrial intensity adjustments
- Structural complexity levels

---

## Future Enhancements

- Interactive concrete textures
- Dynamic structural animations
- Material aging effects
- Industrial environment adaptations
