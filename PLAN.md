# Cursor‑First Markdown Code Generation Plan

> **Purpose**: This document defines a strict Markdown contract so Cursor AI can generate UI code reliably **without any traditional parser**.
>
> Covered rules: **Section-based generation (2), Global rules (3), Idea vs Implementation (4), Prompt discipline (7)**.

---

## 🎯 Core Objective

* Markdown files are the **only source of truth**
* Cursor AI is the **code generator**
* Each Markdown file produces **exactly one component**
* Regeneration is **safe, local, and deterministic**

---

## 🧠 Golden Rule

> **ONE `.md` FILE → ONE UI COMPONENT**

* No full-page generation
* Pages only assemble components
* Components are disposable outputs

---

## 📁 Required Folder Structure

```txt
/styles
  /[style-name]
    style.md

    /substyles
      [substyle-name].md

/sections
  [section-name].md

/rules
  rendering-rules.md
```

---

## 🔒 Global Rendering Rules (MANDATORY CONTEXT)

### `/rules/rendering-rules.md`

This file **must always be injected first** into Cursor.

```md
# Global Rendering Rules

@rules
- Use React + TypeScript
- Use TailwindCSS only
- No inline styles
- No external UI libraries unless explicitly allowed
- Components must be accessible
- Do not invent colors, spacing, layout, or behavior
- Follow implementation instructions strictly

@output
- One component per file
- Default export only
- No mock data unless specified
```

---

## 🧩 Section‑Based Generation (Rule 2)

Each file inside the global `/sections` folder generates **one and only one component**.

### Naming Convention

```txt
/sections/form.md   → FormSection.tsx
/sections/menu.md  → MenuSection.tsx
```

Cursor constraint:

> Generate code for this section only. Do not reference or import other sections.

---

## 🧠 Idea vs Implementation Split (Rule 4)

Every section Markdown **must follow this structure**.

```md
# Section Name

@meta
component: FormSection
version: 1.0
---

@idea
Describe the visual and emotional intention.
No technical language.

@idea
Multiple idea blocks are allowed.
---

@implementation
- Technical constraints
- Layout structure
- Allowed HTML elements
- Required interactions
- Tailwind usage expectations
---

@tokens
colors:
  primary: "#ffffff"
  accent: "#eaeaea"

spacing:
  gap: "gap-4"
  padding: "p-4"
```

### Enforcement Rules

* `@idea` explains **WHY**
* `@implementation` explains **HOW**
* Ideas must never become rules implicitly

---

## 🎨 Style & Sub‑Style Files (Context Only)

These files **never generate components directly**.
They only provide design context.

### `style.md`

```md
# Minimal Style

@tokens
colors:
  background: "#ffffff"
  text: "#000000"

borders:
  radius: 8
  width: 1

layout:
  maxWidth: "max-w-4xl"
```

### `substyle.md`

```md
# Soft Minimal

@idea
A warmer and calmer interpretation of minimalism.

@idea
Soft contrast and generous spacing.
```

Cursor constraint:

> Use these files strictly as **context**, never as generation targets.

---

## 🎯 Cursor Prompt Discipline (Rule 7)

### ❌ Forbidden Prompts

* “Make it better”
* “Improve the design”
* “Add what is missing”

### ✅ Canonical Cursor Prompt

```txt
You are generating a single React TypeScript component.

Context files:
- rendering-rules.md
- style.md
- substyle.md

Source file:
- section.md

Constraints:
- Follow implementation instructions exactly
- Do not invent tokens or UI elements
- Do not refactor beyond scope

Output:
- One TSX file
- Default export only
```

---

## 🔁 Regeneration Contract

* Generated code is disposable
* Markdown is authoritative
* Never manually edit generated components
* All fixes happen in Markdown

---

## ✅ Guarantees

Following this plan ensures:

* Stable and predictable code generation
* Safe partial regeneration
* Consistent styles across substyles
* Zero parser logic

---

## 🧠 Final Principle

> If the output is wrong, the Markdown is wrong.

Fix the MD. Regenerate. Done.

---

## 📱 Application Structure Requirements

### 1. All Sections on One Page

All generated sections must be displayed on a single page, divided cleanly with clear visual separation.

**Requirements:**
- One page displays all sections from `/sections/`
- Each section is visually separated (dividers, spacing, headers)
- Sections are stacked vertically in a clean layout
- Page is accessible at `/styles/[style-name]/[substyle-name]`

### 2. Style-Specific CSS Files

Each style must have its own CSS file to ensure style isolation.

**Requirements:**
- Each style has a dedicated CSS file: `app/styles/[style-name].css`
- CSS file contains all tokens and utilities for that style
- Substyles inherit from the base style CSS
- CSS files are imported in the style-specific pages

**File Structure:**
```
app/
  styles/
    [style-name].css
  [style-name]/
    [substyle-name]/
      page.tsx  (displays all sections)
```

### 3. Homepage Navigation

Homepage must provide navigation to all style and substyle pages.

**Requirements:**
- Homepage at `/` lists all styles
- Each style links to its substyle pages
- Each substyle page displays all sections with that style/substyle applied
- Clean navigation structure

**Homepage Structure:**
- List of all styles
- For each style, list all substyles
- Links to `/styles/[style-name]/[substyle-name]`

### 4. Component Generation Per Style/Substyle

Components must be generated for each style/substyle combination.

**Requirements:**
- Generate components in: `components/[style-name]/[substyle-name]/[ComponentName]Section.tsx`
- Each style/substyle combination has its own set of components
- Components use the style-specific CSS file
- All sections are imported and displayed on the style/substyle page
