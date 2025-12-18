# ESSACA App - Classical Symmetry Style

## Overview

The Classical Symmetry style embodies the timeless principles of classical architecture, drawing inspiration from ancient Greek and Roman design traditions, emphasizing balance, proportion, and harmony. This style features symmetrical layouts, classical architectural elements, and a refined color palette that reflects the enduring beauty of classical design. The design philosophy centers on architectural order, mathematical precision, and the pursuit of aesthetic perfection through balanced composition.

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

The application uses a refined, classical color palette with timeless architectural tones:

#### Primary Colors
- **Page Background (Ivory)**: `#FFFFF0` - `--color-page` / `bg-page`
- **Main Text (Classic Black)**: `#1A1A1A` - `--color-main` / `text-main`
- **Marble White (Primary)**: `#F8F8FF` - `--color-marble` / `bg-marble` / `text-marble`
- **Column Gray (Secondary)**: `#708090` - `--color-column` / `bg-column` / `text-column`
- **Card Background (Parchment)**: `#FAF0E6` - `--color-parchment` / `bg-parchment`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(60, 100, 97.5)` - Maps to ivory
- **Foreground**: `hsl(0, 0, 10)` - Maps to classic black
- **Primary**: `hsl(240, 100, 98)` - Maps to marble white
- **Secondary**: `hsl(210, 15, 50)` - Maps to column gray
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(30, 30, 95)` - Subtle backgrounds
- **Border**: `hsl(30, 20, 90)` - Light parchment borders
- **Input**: `hsl(30, 20, 90)` - Input borders
- **Ring**: `hsl(210, 15, 50)` - Focus rings (column gray)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (ivory)
className="bg-parchment"   // Card/container background (parchment)
className="bg-marble"      // Primary accent background
className="bg-column"      // Secondary accent background

// Text colors
className="text-main"           // Primary text (classic black)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-marble"         // Accent text (on dark backgrounds)
className="text-column"         // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-column"        // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that evoke classical architectural tradition:

1. **Display Font**: Didot (serif) or Times New Roman (fallback)
   - Weights: 400 (regular), 600 (semibold)
   - Styles: normal, italic
   - Used for: Headings, classical display text, architectural elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 84px)` - Classical, dignified display text
  - Line height: 1.1
  - Font weight: 600 (semibold)
  - Font family: Display font
  - Letter spacing: -0.01em
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, letter spacing -0.005em
- **Display Emphasis**: Italic, weight 400
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.6 (for general text), 1.7 (for classical content)
- Letter spacing: 0.005em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 8px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-parchment)`
  - `border: 2px solid rgba(112, 128, 144, 0.3)`
  - `box-shadow: 0 4px 16px rgba(112, 128, 144, 0.1)`

### Spacing
- Classical proportions based on golden ratio
- Symmetrical spacing that creates visual balance
- Hierarchical spacing inspired by classical architectural orders

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 8px`
  - `font-size: 15px`
  - `font-weight: 600`
  - `letter-spacing: 0.02em`
  - `text-transform: none`
  - `transition: all 0.3s ease`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background-color: var(--color-column)`
  - `color: var(--color-marble)`
  - `border: 2px solid var(--color-column)`
  - Hover: `background-color: var(--color-main)`, `border-color: var(--color-main)`
  - Active: `transform: translateY(1px)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-column)`
  - `border: 2px solid var(--color-column)`
  - Hover: `background-color: var(--color-column)`, `color: var(--color-marble)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-column)`, `background-color: rgba(112, 128, 144, 0.05)`
  - Active: `transform: translateY(1px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-parchment)`
  - `border: 1px solid rgba(112, 128, 144, 0.2)`
  - `border-radius: 12px`
  - `padding: 2rem`
  - `position: relative`
  - `box-shadow: 0 2px 8px rgba(112, 128, 144, 0.08)`
  - Hover: `transform: translateY(-4px)`, `box-shadow: 0 8px 24px rgba(112, 128, 144, 0.15)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 1.5rem`
  - `padding-bottom: 1rem`
  - `border-bottom: 2px solid var(--color-column)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 600`
  - `font-size: 1.5rem` (desktop: `1.75rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.01em`

- **Card Description (`.card-description`)**:
  - `color: rgba(26, 26, 26, 0.7)`
  - `font-size: 0.875rem` (desktop: `1rem`)
  - `line-height: 1.7`
  - `letter-spacing: 0.005em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.5rem`
  - `border-radius: 8px`
  - `border: 2px solid rgba(112, 128, 144, 0.2)`
  - `background-color: var(--color-parchment)`
  - `color: var(--color-main)`
  - `padding: 0.5rem 0.75rem`
  - Focus: `outline: none`, `border-color: var(--color-column)`, `border-width: 2px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 2px`

---

## Custom CSS Classes

- **`.classical-header`**: Symmetrical architectural header
- **`.column-section`**: Classical column-inspired sections
- **`.symmetric-layout`**: Balanced, symmetrical arrangements
- **`.architectural-border`**: Classical architectural border elements

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Symmetrical layouts that maintain classical balance across devices
- Touch interactions with architectural precision

---

## Utility Functions

- Standard Tailwind utility classes for symmetrical layouts
- Custom utility classes for classical colors (`bg-marble`, `text-column`, `border-parchment`, etc.)
- Architectural utility classes for classical design

---

## Design Patterns

- **Symmetrical Balance**: Perfect left-right balance
- **Classical Proportions**: Golden ratio-based layouts
- **Architectural Hierarchy**: Clear visual order and importance
- **Timeless Elegance**: Enduring classical design principles
- **Structural Integrity**: Strong, balanced foundations
- **Harmonious Composition**: Mathematically pleasing arrangements

---

## Implementation Example

```tsx
// Classical Symmetry Hero Section
<div className="hero-section bg-page">
  <div className="hero-content-wrapper max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-display text-main mb-6">
        Architecture <span className="text-display-emphasis">Classique</span>
      </h1>
      <p className="text-main-70 text-lg max-w-3xl mx-auto leading-relaxed">
        Les principes éternels de l'harmonie architecturale
      </p>
    </div>
    <div className="symmetric-actions flex justify-center gap-8">
      <button className="btn-cta">Nos programmes</button>
      <button className="btn-secondary">L'histoire</button>
    </div>
  </div>
  <div className="classical-columns absolute bottom-0 left-0 right-0 flex justify-between px-8 opacity-20">
    <div className="column bg-column w-4 h-32"></div>
    <div className="column bg-column w-4 h-32"></div>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with advanced CSS support
- Progressive enhancement for older browsers
- Optimized for classical, structured experiences

---

## Performance Considerations

- Efficient symmetrical layouts
- Optimized classical typography rendering
- Fast loading of architectural elements
- Minimal layout complexity

---

## Accessibility Features

- Clear symmetrical navigation
- High contrast for classical readability
- Logical tab order with architectural hierarchy
- Focus indicators with classical color schemes

---

## Customization Options

- Architectural orders (Doric, Ionic, Corinthian)
- Classical color palettes (marble, stone, bronze)
- Symmetry intensity controls
- Traditional vs contemporary classical adaptations

---

## Future Enhancements

- Interactive architectural elements
- Classical animation sequences
- Historical architectural overlays
- Virtual classical architecture tours
