# ESSACA App - Contemporary Geometric Style

## Overview

The Contemporary Geometric style embraces bold geometric forms and vibrant colors through modern abstract patterns. This style features sharp angles, vibrant color combinations, and dynamic geometric compositions that reflect contemporary architectural innovation. The color palette centers around electric magenta (#FF006E), cyan (#00D4FF), and yellow (#FFD700) with a focus on geometric precision and visual impact.

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

The application uses a carefully curated geometric-inspired color palette:

#### Primary Colors
- **Page Background (Pure White)**: `#FFFFFF` - `--color-page` / `bg-page`
- **Main Text (Deep Charcoal)**: `#1A1A1A` - `--color-main` / `text-main`
- **Magenta (Primary)**: `#FF006E` - `--color-magenta` / `bg-magenta` / `text-magenta`
- **Cyan (Secondary)**: `#00D4FF` - `--color-cyan` / `bg-cyan` / `text-cyan`
- **Card Background (Off White)**: `#FAFAFA` - `--color-offwhite` / `bg-offwhite`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(0, 0, 100)` - Maps to pure white
- **Foreground**: `hsl(0, 0, 10)` - Maps to deep charcoal
- **Primary**: `hsl(333, 100, 50)` - Maps to magenta
- **Secondary**: `hsl(190, 100, 50)` - Maps to cyan
- **Destructive**: `hsl(0, 84, 60)` - Error states
- **Muted**: `hsl(0, 0, 98)` - Subtle backgrounds
- **Border**: `hsl(0, 0, 90)` - Light borders
- **Input**: `hsl(0, 0, 90)` - Input borders
- **Ring**: `hsl(333, 100, 50)` - Focus rings (magenta)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (pure white)
className="bg-offwhite"    // Card/container background (off white)
className="bg-magenta"     // Primary accent background
className="bg-cyan"        // Secondary background

// Text colors
className="text-main"           // Primary text (deep charcoal)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-magenta"        // Accent text
className="text-cyan"           // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-magenta"      // Accent borders
```

---

## Typography

### Font Families

The application uses bold, geometric typography:

1. **Display Font**: Oswald (primary) or sans-serif (fallback)
   - Weights: 400 (regular), 600 (semibold), 700 (bold)
   - Styles: normal, uppercase
   - Used for: Headings, display text
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 96px)` - Responsive display text
  - Line height: 1.1
  - Font weight: 700 (bold)
  - Font family: Display font
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, uppercase
- **Display Emphasis**: Font weight 700, uppercase, with geometric accent
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: `16px`
- Line height: `1.6`
- Font family: Inter (body font)

### Typography Utilities

```tsx
// Display text
<h1 className="text-display text-main">
  <span className="text-display-emphasis">ESSACA</span>
</h1>

// Responsive headings
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-main uppercase">

// Body text with opacity
<p className="text-main/70 text-sm sm:text-base">
```

---

## Layout & Spacing

### Container System

The application uses geometric containers with sharp angles:

```css
.container-geometric {
  max-width: calc(100% - 80px);
  margin: 0 auto;
  border-radius: 0;
  padding: 3rem 4rem;
  background-color: var(--color-offwhite);
  position: relative;
  border: 2px solid var(--color-magenta);
  clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%);
}
```

**Responsive behavior:**
- Mobile: `max-width: calc(100% - 40px)`, `padding: 2rem`, simplified clip-path

### Spacing Patterns

The application uses bold, geometric spacing:

```tsx
// Padding
className="p-4 sm:p-6"           // Bold padding
className="px-4 sm:px-6 lg:px-8" // Horizontal padding
className="py-6 sm:py-12"        // Vertical padding

// Margins
className="mb-4 sm:mb-8"         // Bold margins
className="gap-4 sm:gap-6"       // Gap spacing
```

### Grid Layouts

```tsx
// Geometric grids
className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
```

---

## Component Styling

### Button Components

The application uses geometric button styles with bold shapes:

#### 1. Primary Button
```css
.btn-primary {
  @apply bg-magenta text-page font-bold uppercase rounded-none px-8 py-4;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s ease;
  clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%);
  border: 2px solid var(--color-magenta);
}

.btn-primary:hover {
  @apply bg-magenta/90;
  transform: translateX(4px) translateY(-4px);
  box-shadow: -4px 4px 0px var(--color-cyan);
}
```

#### 2. Secondary Button
```css
.btn-secondary {
  @apply bg-transparent border-2 border-cyan text-cyan font-bold uppercase rounded-none px-8 py-4;
  transition: all 0.2s ease;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
}

.btn-secondary:hover {
  @apply bg-cyan text-page;
  transform: translateX(-2px) translateY(2px);
}
```

#### 3. Ghost Button
```css
.btn-ghost {
  @apply bg-transparent text-magenta font-bold uppercase rounded-none px-8 py-4;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  @apply bg-offwhite;
  transform: scale(1.05);
}
```

### Card Components

Cards use bold geometric shapes with dynamic angles:

```tsx
<Card className="bg-offwhite border-2 border-magenta rounded-none hover:border-cyan transition-all overflow-hidden relative clip-card">
  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan clip-triangle"></div>
  <CardHeader className="p-6">
    <CardTitle className="text-main font-display font-bold text-xl sm:text-2xl uppercase">
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
- Background: `bg-offwhite` (off white)
- Border: `border-2 border-magenta` (bold magenta)
- Geometric clip-path for dynamic shapes
- Hover: `hover:border-cyan` (color shift)
- Uppercase typography for boldness

### Form Components

#### Input
```tsx
<Input
  className="bg-page border-2 border-main/20 text-main focus:border-magenta focus:ring-magenta rounded-none px-4 py-3 placeholder:text-main/50 uppercase font-semibold"
/>
```

**Input Styling:**
- Base: `h-12`, `rounded-none`, `border-2`, `bg-page`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring`
- Custom: `bg-page`, `border-main/20`, `focus:border-magenta`
- Uppercase styling for geometric feel

---

## Custom CSS Classes

### Container Classes

#### `.container-geometric`
Main content container with:
- Sharp geometric clip-path
- Bold magenta border
- Off-white background
- Dynamic angular shapes

### Typography Utilities

#### `.text-display`
Display text utility:
```css
.text-display {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(48px, 5vw, 96px);
  line-height: 1.1;
  text-transform: uppercase;
}
```

#### `.text-display-emphasis`
Emphasized display text:
```css
.text-display-emphasis {
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
}

.text-display-emphasis::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-magenta), var(--color-cyan));
}
```

### Decorative Classes

#### `.clip-card`
Geometric card clip-path:
```css
.clip-card {
  clip-path: polygon(0 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%);
}
```

#### `.clip-triangle`
Geometric triangle accent:
```css
.clip-triangle {
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}
```

#### `.geometric-accent`
Bold geometric accent line:
```css
.geometric-accent {
  width: 100px;
  height: 8px;
  background: linear-gradient(45deg, var(--color-magenta), var(--color-cyan));
  clip-path: polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%);
  margin: 3rem auto;
}
```

---

## Responsive Design

### Breakpoint Strategy

The application uses geometric breakpoints:

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
className="p-4 sm:p-6"                   // Padding
className="gap-4 sm:gap-6"              // Gaps
className="mb-4 sm:mb-8"                // Margins
```

#### Layout
```tsx
className="flex-col sm:flex-row"        // Flex direction
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grid columns
```

### Mobile Optimizations

- Simplified clip-paths on mobile for performance
- Touch-friendly button sizes
- Readable font sizes maintained
- Bold geometric elements adapted for mobile

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

The application consistently uses opacity modifiers for geometric hierarchy:

- `text-main` - Primary text (100% opacity)
- `text-main/80` - Secondary text
- `text-main/70` - Muted text (descriptions)
- `text-main/60` - Subtle text (labels, hints)
- `text-main/40` - Very subtle text

### Border Patterns

- `border-main/10` - Subtle borders (cards, containers)
- `border-main/20` - Standard borders (inputs, buttons)
- `border-main/40` - More visible borders (hover states)
- `border-magenta` - Bold magenta borders
- `border-cyan` - Bright cyan borders

### Shadow Patterns

- Custom: `box-shadow: -4px 4px 0px var(--color-cyan)` (geometric offset)
- Custom: `box-shadow: 0 8px 24px rgba(255, 0, 110, 0.2)` (button hover)

### Transition Patterns

- `transition-all` - All property transitions
- Duration: `0.2s ease` (geometric feel)

### Focus States

All interactive elements have geometric focus states:

```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
focus-visible:clip-path-none
```

For custom elements:
```css
focus:border-magenta
focus:ring-magenta
```

### Hover States

- Buttons: Transform effects with offset shadows
- Cards: Border color shifts
- Links: Scale transforms
- Interactive elements: Dynamic geometric movements

---

## Best Practices

### 1. Use Semantic Color Names
```tsx
// ✅ Good
className="bg-page text-main"

// ❌ Avoid
className="bg-[#FFFFFF] text-[#1A1A1A]"
```

### 2. Bold, Geometric Spacing
Always include appropriate geometric spacing:
```tsx
// ✅ Good
className="mb-4 sm:mb-8"

// ❌ Avoid
className="mb-[17px]"
```

### 3. Consistent Typography Hierarchy
Use the established geometric typography scale:
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

### 5. Geometric Interactions
Use transform effects and dynamic movements:
```tsx
// ✅ Good
className="hover:transform hover:translateX-4 hover:-translateY-4 transition-all"

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

The Contemporary Geometric style embraces bold forms through:

1. **Geometric precision** with sharp angles and dynamic shapes
2. **Vibrant color combinations** featuring magenta, cyan, and bold contrasts
3. **Dynamic interactions** with transform effects and offset shadows
4. **Bold typography** using uppercase fonts and strong weights
5. **Modern abstraction** reflecting contemporary architectural innovation

The styling system is designed to be:
- **Geometric**: Bold shapes and angular designs
- **Dynamic**: Interactive transform effects
- **Vibrant**: High-contrast color combinations
- **Modern**: Contemporary design language
- **Bold**: Strong visual impact and presence
