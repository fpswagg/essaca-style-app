# ESSACA App - Digital Tech Style

## Overview

The Digital Tech style embraces modern technology and digital innovation through a futuristic aesthetic. This style features neon accents, digital patterns, and high-contrast elements that reflect the intersection of architecture and technology. The color palette centers around electric blue (#00D4FF), neon green (#00FF88), and dark backgrounds (#0A0A0A) with a focus on digital interfaces and technological advancement.

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

The application uses a carefully curated tech-inspired color palette:

#### Primary Colors
- **Page Background (Dark Tech)**: `#0A0A0A` - `--color-page` / `bg-page`
- **Main Text (Electric Blue)**: `#00D4FF` - `--color-main` / `text-main`
- **Neon Green (Primary)**: `#00FF88` - `--color-neon` / `bg-neon` / `text-neon`
- **Electric Blue (Secondary)**: `#00D4FF` - `--color-electric` / `bg-electric` / `text-electric`
- **Card Background (Dark Panel)**: `#1A1A1A` - `--color-panel` / `bg-panel`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(0, 0, 4)` - Maps to dark tech
- **Foreground**: `hsl(190, 100, 50)` - Maps to electric blue
- **Primary**: `hsl(135, 100, 50)` - Maps to neon green
- **Secondary**: `hsl(190, 100, 50)` - Maps to electric blue
- **Destructive**: `hsl(0, 100, 67)` - Error states (neon red)
- **Muted**: `hsl(0, 0, 10)` - Subtle backgrounds
- **Border**: `hsl(0, 0, 20)` - Dark borders with glow
- **Input**: `hsl(0, 0, 20)` - Input borders
- **Ring**: `hsl(135, 100, 50)` - Focus rings (neon green)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (dark tech)
className="bg-panel"       // Card/container background (dark panel)
className="bg-neon"        // Primary accent background
className="bg-electric"    // Secondary background

// Text colors
className="text-main"           // Primary text (electric blue)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-neon"           // Accent text
className="text-electric"       // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-neon"         // Accent borders
```

---

## Typography

### Font Families

The application uses futuristic, tech-inspired typography:

1. **Display Font**: Space Grotesk (primary) or monospace (fallback)
   - Weights: 400 (regular), 500 (medium), 700 (bold)
   - Styles: normal
   - Used for: Headings, display text
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: JetBrains Mono
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-mono`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 96px)` - Responsive display text
  - Line height: 1.1
  - Font weight: 700 (bold)
  - Font family: Display font
  - Utility class: `text-display`

- **H2-H6**: Font weight 500, display font family
- **Display Emphasis**: Font weight 700, with glow effect
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: `16px`
- Line height: `1.6`
- Font family: JetBrains Mono (body font)

### Typography Utilities

```tsx
// Display text
<h1 className="text-display text-main">
  <span className="text-display-emphasis">ESSACA</span>
</h1>

// Responsive headings
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-main">

// Body text with opacity
<p className="text-main/70 text-sm sm:text-base">
```

---

## Layout & Spacing

### Container System

The application uses sleek containers with digital edges:

```css
.container-digital {
  max-width: calc(100% - 80px);
  margin: 0 auto;
  border-radius: 8px;
  padding: 3rem 4rem;
  background-color: var(--color-panel);
  position: relative;
  border: 1px solid var(--color-main);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
}
```

**Responsive behavior:**
- Mobile: `max-width: calc(100% - 40px)`, `padding: 2rem`

### Spacing Patterns

The application uses precise, tech-inspired spacing:

```tsx
// Padding
className="p-3 sm:p-4"           // Precise padding
className="px-3 sm:px-4 lg:px-6" // Horizontal padding
className="py-4 sm:py-6"        // Vertical padding

// Margins
className="mb-3 sm:mb-6"         // Precise margins
className="gap-3 sm:gap-4"       // Gap spacing
```

### Grid Layouts

```tsx
// Digital grids
className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
```

---

## Component Styling

### Button Components

The application uses digital button styles with glow effects:

#### 1. Primary Button
```css
.btn-primary {
  @apply bg-neon text-page rounded px-6 py-3;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid var(--color-neon);
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
}

.btn-primary:hover {
  @apply bg-neon/80;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
  transform: translateY(-1px);
}
```

#### 2. Secondary Button
```css
.btn-secondary {
  @apply bg-transparent border border-electric text-electric rounded px-6 py-3;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  @apply bg-electric text-page;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}
```

#### 3. Ghost Button
```css
.btn-ghost {
  @apply bg-transparent text-neon rounded px-6 py-3;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  @apply bg-panel/50;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
}
```

### Card Components

Cards use digital aesthetics with glow borders:

```tsx
<Card className="bg-panel border border-main/20 rounded-lg hover:border-neon/50 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]">
  <CardHeader className="p-6">
    <CardTitle className="text-main font-display font-medium text-xl sm:text-2xl">
      Title
    </CardTitle>
    <CardDescription className="text-main/70 text-sm sm:text-base">
      Description
    </CardDescription>
  </CardHeader>
  <CardContent className="p-6 pt-0">
    {/* Content */}
  </CardContent>
</Card>
```

**Card Styling Patterns:**
- Background: `bg-panel` (dark panel)
- Border: `border border-main/20` (subtle)
- Hover: `hover:border-neon/50` with glow effect
- Responsive text: `text-xl sm:text-2xl`

### Form Components

#### Input
```tsx
<Input
  className="bg-page border-main/20 text-main focus:border-neon focus:ring-neon rounded px-4 py-3 placeholder:text-main/50"
/>
```

**Input Styling:**
- Base: `h-12`, `rounded`, `border`, `bg-page`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring`
- Custom: `bg-page`, `border-main/20`, `focus:border-neon`
- Glow effect on focus

---

## Custom CSS Classes

### Container Classes

#### `.container-digital`
Main content container with:
- Sharp corners (8px)
- Dark panel background
- Electric blue border with subtle glow
- Precise responsive padding
- Max-width with side margins

### Typography Utilities

#### `.text-display`
Display text utility:
```css
.text-display {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(48px, 5vw, 96px);
  line-height: 1.1;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}
```

#### `.text-display-emphasis`
Emphasized display text:
```css
.text-display-emphasis {
  font-weight: 700;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}
```

### Decorative Classes

#### `.digital-grid`
Digital grid overlay:
```css
.digital-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: inherit;
  pointer-events: none;
}
```

#### `.neon-glow`
Neon glow effect:
```css
.neon-glow {
  box-shadow:
    0 0 5px var(--color-neon),
    0 0 10px var(--color-neon),
    0 0 15px var(--color-neon);
}
```

---

## Responsive Design

### Breakpoint Strategy

The application uses digital breakpoints:

- **sm**: `640px` - Small tablets
- **md**: `768px` - Tablets
- **lg**: `1024px` - Desktops
- **xl**: `1280px` - Large desktops

### Responsive Patterns

#### Text Sizing
```tsx
className="text-sm sm:text-base"           // Body text
className="text-xl sm:text-2xl"          // Headings
className="text-3xl sm:text-4xl lg:text-5xl" // Display text
```

#### Spacing
```tsx
className="p-3 sm:p-4"                   // Padding
className="gap-3 sm:gap-4"              // Gaps
className="mb-3 sm:mb-6"                // Margins
```

#### Layout
```tsx
className="flex-col sm:flex-row"        // Flex direction
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grid columns
```

### Mobile Optimizations

- Optimized glow effects for performance
- Touch-friendly button sizes
- Readable monospace font sizes maintained
- Reduced grid patterns on mobile

---

## Utility Functions

### `cn()` Function

The application uses a utility function for conditional class merging:

```typescript
import { cn } from '@/lib/utils';

// Combines clsx and tailwind-merge
className={cn('base-class', condition && 'conditional-class', className)}
```

**Usage:**
```tsx
<div className={cn(
  'base-styles',
  variant === 'primary' && 'primary-styles',
  className
)}>
```

### Class Variance Authority (CVA)

Used for component variants:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-classes',
        secondary: 'secondary-classes',
      },
      size: {
        sm: 'small-classes',
        lg: 'large-classes',
      },
    },
  }
);
```

---

## Design Patterns

### Color Opacity Patterns

The application consistently uses opacity modifiers for digital hierarchy:

- `text-main` - Primary text (100% opacity)
- `text-main/80` - Secondary text
- `text-main/70` - Muted text (descriptions)
- `text-main/60` - Subtle text (labels, hints)
- `text-main/40` - Very subtle text

### Border Patterns

- `border-main/10` - Subtle borders (cards, containers)
- `border-main/20` - Standard borders (inputs, buttons)
- `border-main/40` - More visible borders (hover states)
- `border-neon` - Neon accent borders
- `border-electric` - Electric accent borders

### Shadow Patterns

- `shadow-[0_0_20px_rgba(0,255,136,0.1)]` - Neon glow shadows
- Custom: `box-shadow: 0 0 20px rgba(0, 212, 255, 0.1)` (container glow)
- Custom: `box-shadow: 0 0 10px rgba(0, 255, 136, 0.3)` (button glow)

### Transition Patterns

- `transition-all` - All property transitions
- Duration: `0.2s ease` (digital feel)

### Focus States

All interactive elements have digital focus states:

```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
focus-visible:shadow-[0_0_10px_rgba(0,255,136,0.5)]
```

For custom elements:
```css
focus:border-neon
focus:ring-neon
focus:neon-glow
```

### Hover States

- Buttons: Background color change + glow increase
- Cards: Border color change + glow effect
- Links: Color transition with glow
- Interactive elements: Digital glow effects

---

## Best Practices

### 1. Use Semantic Color Names
```tsx
// ✅ Good
className="bg-page text-main"

// ❌ Avoid
className="bg-[#0A0A0A] text-[#00D4FF]"
```

### 2. Precise, Digital Spacing
Always include appropriate digital spacing:
```tsx
// ✅ Good
className="mb-3 sm:mb-6"

// ❌ Avoid
className="mb-[17px]"
```

### 3. Consistent Typography Hierarchy
Use the established digital typography scale:
```tsx
// ✅ Good
className="text-display-emphasis"

// ❌ Avoid
className="font-bold text-6xl"
```

### 4. Component Composition
Use the `cn()` utility for conditional classes:
```tsx
// ✅ Good
className={cn('base-class', variant && 'variant-class', className)}

// ❌ Avoid
className={`base-class ${variant ? 'variant-class' : ''} ${className}`}
```

### 5. Digital Interactions
Use glow effects and digital transitions:
```tsx
// ✅ Good
className="hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] transition-all"

// ❌ Avoid
className="hover:scale-110 hover:rotate-3"
```

---

## File Structure

```
app/
  globals.css              # Main CSS file with custom classes
  layout.tsx              # Root layout with font loading

tailwind.config.ts        # Tailwind configuration with custom theme

components/
  ui/                     # shadcn/ui components
    button.tsx
    card.tsx
    input.tsx
    form.tsx
    dialog.tsx
    # ... other UI components

lib/
  utils.ts                # cn() utility function
```

---

## Summary

The Digital Tech style embraces technology through:

1. **Futuristic aesthetics** with neon colors and digital effects
2. **High-contrast design** using dark backgrounds and bright accents
3. **Digital patterns** with grids and glow effects
4. **Modern typography** featuring monospace fonts and bold weights
5. **Interactive glow effects** for engaging user experience

The styling system is designed to be:
- **Digital**: Tech-focused with neon accents
- **Modern**: Contemporary design patterns
- **Interactive**: Engaging glow effects and transitions
- **Accessible**: WCAG 2.1 AA compliance with high contrast
- **Performant**: Optimized glow effects and transitions
