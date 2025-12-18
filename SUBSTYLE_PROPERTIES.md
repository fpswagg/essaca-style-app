# Substyle Properties Mapping

This document defines the exact properties for each substyle that should be applied consistently across all components.

## Basic Style

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-6`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### elegant
- padding: `p-8 sm:p-10`
- gap: `gap-10`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### warm
- padding: `p-6 sm:p-8`
- gap: `gap-6`
- rounded: `rounded-2xl`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### crisp
- padding: `p-6 sm:p-8`
- gap: `gap-6`
- rounded: `rounded-md`
- border: `border-2`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

## Urban Concrete

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

### weathered
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`
- opacity: `opacity-95`

### polished
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-xl`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### raw
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-none`
- border: `border-2`
- borderWidth: `border-main/30`
- shadow: `shadow-md`

## Biophilic Nature

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

### forest
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border-2`
- borderWidth: `border-main/30`
- shadow: `shadow-md`

### meadow
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-2xl`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### earth
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

## Digital Tech

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-neon/30`
- shadow: `shadow-sm`

### cyberpunk
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border-2`
- borderWidth: `border-neon/30`
- shadow: `shadow-lg`
- glow: `drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]`

### holographic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-2xl`
- border: `border`
- borderWidth: `border-neon/30`
- shadow: `shadow-sm`
- backdrop: `backdrop-blur-sm`

### matrix
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-none`
- border: `border`
- borderWidth: `border-neon/50`
- shadow: `shadow-sm`
- mono: `font-mono`

## Classical Symmetry

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### greek
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### roman
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

### neoclassical
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-xl`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`

## Contemporary Geometric

### basic
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

### vibrant
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-lg`
- border: `border-2`
- borderWidth: `border-magenta/40`
- shadow: `shadow-lg`

### minimal-geometric
- padding: `p-6 sm:p-8`
- gap: `gap-6`
- rounded: `rounded-none`
- border: `border`
- borderWidth: `border-main/20`
- shadow: `shadow-sm`

### gradient
- padding: `p-6 sm:p-8`
- gap: `gap-8`
- rounded: `rounded-2xl`
- border: `border`
- borderWidth: `border-main/10`
- shadow: `shadow-sm`
- gradient: `bg-gradient-to-br from-page to-offwhite`

## Usage Rules

1. **Main Section Wrapper**: Always use the full set of properties (padding, gap, rounded, border, borderWidth, shadow, plus optional effects)
2. **Nested Cards/Containers**: Use the same rounded, border, borderWidth, and shadow properties
3. **Gap**: Apply to flex/grid containers within the section
4. **Padding**: Apply to the main section wrapper
5. **Optional Effects**: Apply glow to text/elements, backdrop to containers, mono to text, gradient to backgrounds, opacity to containers

