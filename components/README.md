# Components Directory

This directory contains **generated components** from Markdown files.

## ⚠️ Important

- **DO NOT manually edit files in this directory**
- Components are generated from Markdown files in the global `/sections/` folder
- If a component needs changes, edit the corresponding `.md` file and regenerate
- Generated components are disposable and can be safely deleted

## Structure

Components should follow the naming convention:
- `sections/form.md` → `FormSection.tsx`
- `sections/menu.md` → `MenuSection.tsx`

## Generation

To generate a component, use Cursor AI with the canonical prompt from `PLAN.md`:

```
You are generating a single React TypeScript component.

Context files:
- rendering-rules.md
- style.md
- substyle.md (if applicable)

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

