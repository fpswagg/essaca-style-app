# ESSACA App - Styling Documentation

## Overview

The ESSACA application uses a comprehensive styling system built on **Tailwind CSS** with custom design tokens, **shadcn/ui** components, and **DaisyUI** integration. The design follows a sophisticated color palette centered around burgundy (#5C0E0E) and cream (#F5F2EC) with a focus on accessibility and responsive design.

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

The application uses a carefully curated color palette defined in both CSS variables and Tailwind configuration:

#### Primary Colors
- **Page Background (Cream)**: `#F5F2EC` - `--color-page` / `bg-page`
- **Main Text (Anthracite)**: `#111827` - `--color-main` / `text-main`
- **Burgundy (Primary)**: `#5C0E0E` - `--color-burgundy` / `bg-burgundy` / `text-burgundy`
- **Burgundy Alt (Secondary)**: `#4E0B0B` - `--color-burgundy-alt` / `bg-burgundy-alt`
- **CTA Background (White)**: `#FFFFFF` - `--color-cta` / `bg-cta`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(245, 242, 236)` - Maps to cream
- **Foreground**: `hsl(17, 24, 39)` - Maps to anthracite
- **Primary**: `hsl(92, 14, 14)` - Maps to burgundy
- **Secondary**: `hsl(78, 11, 11)` - Maps to burgundy alt
- **Destructive**: `hsl(239, 68, 68)` - Error states
- **Muted**: `hsl(245, 242, 236)` - Subtle backgrounds
- **Border**: `hsl(229, 225, 217)` - Light cream borders
- **Input**: `hsl(229, 225, 217)` - Input borders
- **Ring**: `hsl(92, 14, 14)` - Focus rings (burgundy)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (cream)
className="bg-cta"         // Card/container background (white)
className="bg-burgundy"    // Primary accent background
className="bg-main"        // Dark background

// Text colors
className="text-main"           // Primary text (anthracite)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-burgundy"       // Accent text
className="text-cta"            // White text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-burgundy"      // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families:

1. **Display Font**: Poppins (primary) or Space Grotesk (fallback)
   - Weights: 300 (light), 400 (regular)
   - Styles: normal, italic
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
  - Font weight: 300 (light)
  - Font family: Display font
  - Utility class: `text-display`

- **H2-H6**: Font weight 300, display font family
- **Display Emphasis**: Italic, weight 400
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
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-main">

// Body text with opacity
<p className="text-main/70 text-sm sm:text-base">
```

---

## Layout & Spacing

### Container System

The application uses a custom container class with rounded corners and padding:

```css
.container-main {
  max-width: calc(100% - 80px);
  margin: 0 auto;
  border-radius: 42px;
  padding: 3rem 4rem;
  background-color: var(--color-cta);
  position: relative;
}
```

**Responsive behavior:**
- Mobile: `max-width: calc(100% - 40px)`, `border-radius: 24px`, `padding: 2rem`

### Spacing Patterns

The application uses Tailwind's spacing scale with responsive modifiers:

```tsx
// Padding
className="p-4 sm:p-6"           // Responsive padding
className="px-4 sm:px-6 lg:px-8" // Horizontal padding
className="py-6 sm:py-12"        // Vertical padding

// Margins
className="mb-4 sm:mb-8"         // Responsive margins
className="gap-3 sm:gap-4"       // Gap spacing
```

### Grid Layouts

```tsx
// Responsive grids
className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
```

---

## Component Styling

### Button Components

The application uses multiple button styles:

#### 1. CTA Button (Primary)
```css
.btn-cta {
  @apply bg-cta text-burgundy rounded-full px-12 py-4;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-cta:hover {
  @apply bg-page;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(92, 14, 14, 0.15);
}
```

#### 2. Secondary Button
```css
.btn-secondary {
  @apply bg-transparent border-2 border-burgundy text-burgundy rounded-full px-12 py-4;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  @apply bg-burgundy text-cta;
}
```

#### 3. Ghost Button
```css
.btn-ghost {
  @apply bg-transparent text-burgundy rounded-full px-12 py-4;
}

.btn-ghost:hover {
  @apply bg-page;
}
```

#### 4. shadcn/ui Button Variants
The application also uses shadcn/ui button component with variants:
- `default`: `bg-foreground text-background`
- `destructive`: `bg-destructive text-destructive-foreground`
- `outline`: `border border-input bg-background`
- `secondary`: `bg-secondary text-secondary-foreground`
- `ghost`: `hover:bg-accent hover:text-accent-foreground`
- `link`: `text-foreground underline-offset-4`

### Card Components

Cards use the shadcn/ui Card component with custom styling:

```tsx
<Card className="bg-cta border border-main/10 shadow-sm">
  <CardHeader>
    <CardTitle className="text-main font-display font-light text-xl sm:text-2xl">
      Title
    </CardTitle>
    <CardDescription className="text-main/70 text-sm sm:text-base">
      Description
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Card Styling Patterns:**
- Background: `bg-cta` (white)
- Border: `border border-main/10` (subtle)
- Hover: `hover:shadow-lg transition-shadow` (for interactive cards)
- Responsive text: `text-xl sm:text-2xl`

### Form Components

#### Input
```tsx
<Input
  className="bg-cta border-main/20 text-main focus:border-burgundy focus:ring-burgundy"
/>
```

**Input Styling:**
- Base: `h-10`, `rounded-md`, `border`, `bg-background`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring`
- Custom: `bg-cta`, `border-main/20`, `focus:border-burgundy`

#### Select
Similar styling to Input with `rounded-md` and focus states.

#### Textarea
- Minimum height: `min-h-[80px]`
- Same border and focus patterns as Input

#### Label
- Font: `text-sm font-medium`
- Disabled state: `peer-disabled:cursor-not-allowed peer-disabled:opacity-70`

### Dialog Components

```tsx
<Dialog>
  {/* Overlay */}
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    {/* Card */}
    <Card className="bg-cta border border-main/10">
      {/* Content */}
    </Card>
  </div>
</Dialog>
```

---

## Custom CSS Classes

### Container Classes

#### `.container-main`
Main content container with:
- Rounded corners (42px desktop, 24px mobile)
- White background
- Responsive padding
- Max-width with side margins

### Image Classes

#### `.image-bw`
Black and white image filter:
```css
.image-bw {
  object-fit: cover;
  filter: grayscale(1);
  width: 100%;
  height: 100%;
}
```

### Decorative Classes

#### `.band-burgundy`
Bottom burgundy decorative band:
```css
.band-burgundy {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--color-burgundy);
  border-bottom-right-radius: 42px;
}
```

### Typography Utilities

#### `.text-display`
Display text utility:
```css
.text-display {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(48px, 5vw, 96px);
  line-height: 1.1;
}
```

#### `.text-display-emphasis`
Emphasized display text (italic):
```css
.text-display-emphasis {
  font-style: italic;
  font-weight: 400;
}
```

---

## Responsive Design

### Breakpoint Strategy

The application uses Tailwind's default breakpoints with mobile-first approach:

- **sm**: `640px` - Small tablets
- **md**: `768px` - Tablets
- **lg**: `1024px` - Desktops
- **xl**: `1280px` - Large desktops

### Responsive Patterns

#### Text Sizing
```tsx
className="text-xs sm:text-sm"           // Small text
className="text-sm sm:text-base"         // Body text
className="text-xl sm:text-2xl"          // Headings
className="text-3xl sm:text-4xl lg:text-5xl" // Display text
```

#### Spacing
```tsx
className="p-2 sm:p-4"                   // Padding
className="gap-2 sm:gap-3"              // Gaps
className="mb-4 sm:mb-8"                // Margins
```

#### Layout
```tsx
className="flex-col sm:flex-row"        // Flex direction
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grid columns
```

#### Visibility
```tsx
className="hidden sm:block"             // Hide on mobile
className="block sm:hidden"             // Show only on mobile
```

### Mobile Optimizations

- Reduced padding on containers (40px vs 80px margins)
- Smaller border radius (24px vs 42px)
- Stacked layouts on mobile
- Touch-friendly button sizes
- Responsive font sizes using `clamp()`

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

The application consistently uses opacity modifiers for text hierarchy:

- `text-main` - Primary text (100% opacity)
- `text-main/80` - Secondary text
- `text-main/70` - Muted text (descriptions)
- `text-main/60` - Subtle text (labels, hints)
- `text-main/40` - Very subtle text

### Border Patterns

- `border-main/10` - Subtle borders (cards, containers)
- `border-main/20` - Standard borders (inputs, buttons)
- `border-main/40` - More visible borders (hover states)
- `border-burgundy` - Accent borders

### Shadow Patterns

- `shadow-sm` - Subtle shadows (cards)
- `shadow-lg` - Prominent shadows (hover states)
- Custom: `box-shadow: 0 4px 12px rgba(92, 14, 14, 0.15)` (button hover)

### Transition Patterns

- `transition-colors` - Color transitions
- `transition-shadow` - Shadow transitions
- `transition-all` - All property transitions
- Duration: `0.2s ease` (standard)

### Focus States

All interactive elements have consistent focus states:

```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
```

For custom elements:
```css
focus:border-burgundy
focus:ring-burgundy
```

### Hover States

- Buttons: Background color change + transform/shadow
- Cards: Shadow increase (`hover:shadow-lg`)
- Links: Underline or color change
- Interactive elements: Opacity or background changes

---

## Component-Specific Styling

### Page Header

```tsx
<div className="w-full py-2 sm:py-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</div>
```

### User Header

```tsx
<div className="flex items-center gap-2 sm:gap-3">
  <button className="text-xs sm:text-sm text-main/60 hover:text-main 
                     transition-colors px-2 sm:px-3 py-1.5 sm:py-2 
                     rounded-full border border-main/20 hover:border-main/40">
  </button>
</div>
```

### Form Fields

```tsx
<div className="space-y-2">
  <Label>Label</Label>
  <Input className="bg-cta border-main/20 text-main 
                    focus:border-burgundy focus:ring-burgundy" />
  {error && <p className="text-sm text-destructive">{error}</p>}
</div>
```

### Tables

```tsx
<table className="w-full text-sm sm:text-base">
  <thead>
    <tr className="border-b border-main/10">
      <th className="text-left p-2 sm:p-4 text-main font-medium">
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-main/5 hover:bg-page/50">
      <td className="p-2 sm:p-4 text-main/80">
    </tr>
  </tbody>
</table>
```

---

## DaisyUI Integration

The application includes DaisyUI with a custom theme:

```typescript
daisyui: {
  themes: [{
    essaca: {
      primary: '#5C0E0E',      // Burgundy
      secondary: '#4E0B0B',    // Burgundy alt
      accent: '#111827',       // Anthracite
      neutral: '#F5F2EC',      // Cream
      'base-100': '#FFFFFF',   // White
      'base-200': '#F5F2EC',   // Cream
      'base-300': '#E5E1D9',   // Light cream
      // ... semantic colors
    },
  }],
  base: false,  // Disable DaisyUI base styles
  styled: true,
  utils: true,
}
```

**Note:** DaisyUI base styles are disabled to use custom styling, but utility classes are available.

---

## Accessibility Considerations

### Focus States
- All interactive elements have visible focus indicators
- Focus rings use burgundy color (`ring-burgundy`)
- Focus offset for better visibility

### Color Contrast
- Text on cream background: Anthracite (#111827) - High contrast
- Text on white: Anthracite - High contrast
- Burgundy on white: Meets WCAG AA standards

### Responsive Typography
- Uses `clamp()` for fluid typography
- Minimum readable sizes maintained
- Line height optimized for readability (1.6 for body, 1.1 for headings)

---

## Best Practices

### 1. Use Semantic Color Names
```tsx
// ✅ Good
className="bg-page text-main"

// ❌ Avoid
className="bg-[#F5F2EC] text-[#111827]"
```

### 2. Responsive Classes
Always include responsive variants:
```tsx
// ✅ Good
className="text-sm sm:text-base p-4 sm:p-6"

// ❌ Avoid
className="text-base p-4"
```

### 3. Consistent Spacing
Use Tailwind's spacing scale:
```tsx
// ✅ Good
className="gap-4 mb-6"

// ❌ Avoid
className="gap-[17px] mb-[23px]"
```

### 4. Component Composition
Use the `cn()` utility for conditional classes:
```tsx
// ✅ Good
className={cn('base-class', variant && 'variant-class', className)}

// ❌ Avoid
className={`base-class ${variant ? 'variant-class' : ''} ${className}`}
```

### 5. Opacity for Text Hierarchy
Use opacity modifiers for text emphasis:
```tsx
// ✅ Good
className="text-main/70"  // Muted
className="text-main/60"  // Subtle

// ❌ Avoid
className="text-gray-500"  // Hard-coded colors
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

The ESSACA application uses a sophisticated, cohesive styling system that:

1. **Maintains brand identity** through consistent use of burgundy and cream colors
2. **Ensures accessibility** with proper contrast ratios and focus states
3. **Provides responsive design** with mobile-first approach
4. **Uses modern tooling** (Tailwind CSS, shadcn/ui, CVA)
5. **Follows best practices** for maintainability and scalability

The styling system is designed to be:
- **Consistent**: Reusable patterns and utilities
- **Flexible**: Component variants and responsive modifiers
- **Maintainable**: CSS variables and utility functions
- **Accessible**: Proper focus states and color contrast
- **Performant**: Utility-first CSS with minimal custom styles
