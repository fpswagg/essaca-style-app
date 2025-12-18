/**
 * Navigation utilities for styles, substyles, and sections
 * Provides type-safe paths and helpers for component generation
 */

export const STYLES = {
  'basic-style': {
    name: 'Basic Style',
    path: 'styles/basic-style',
    description: 'Burgundy and cream color palette with elegant typography',
    substyles: ['basic', 'elegant', 'warm', 'crisp'] as const,
  },
  'urban-concrete': {
    name: 'Urban Concrete',
    path: 'styles/urban-concrete',
    description: 'Industrial brutalist aesthetic with concrete and steel tones',
    substyles: ['basic', 'weathered', 'polished', 'raw'] as const,
  },
  'biophilic-nature': {
    name: 'Biophilic Nature',
    path: 'styles/biophilic-nature',
    description: 'Organic natural design with earthy and botanical tones',
    substyles: ['basic', 'forest', 'meadow', 'earth'] as const,
  },
  'digital-tech': {
    name: 'Digital Tech',
    path: 'styles/digital-tech',
    description: 'Futuristic aesthetic with neon accents and digital patterns',
    substyles: ['basic', 'cyberpunk', 'holographic', 'matrix'] as const,
  },
  'classical-symmetry': {
    name: 'Classical Symmetry',
    path: 'styles/classical-symmetry',
    description: 'Timeless classical architecture with balance and proportion',
    substyles: ['basic', 'greek', 'roman', 'neoclassical'] as const,
  },
  'contemporary-geometric': {
    name: 'Contemporary Geometric',
    path: 'styles/contemporary-geometric',
    description: 'Bold geometric forms with vibrant colors',
    substyles: ['basic', 'vibrant', 'minimal-geometric', 'gradient'] as const,
  },
} as const;

export type StyleName = keyof typeof STYLES;
export type SubstyleName<T extends StyleName> = typeof STYLES[T]['substyles'][number];

export const SECTIONS = {
  'admin-dashboard': {
    name: 'Admin Dashboard',
    component: 'AdminDashboardSection',
    description: 'Admin dashboard with statistics and management links',
  },
  'all-dialogs': {
    name: 'All Dialogs',
    component: 'AllDialogsSection',
    description: 'Dialog components for user interactions and confirmations',
  },
  'application-detail-view': {
    name: 'Application Detail View',
    component: 'ApplicationDetailViewSection',
    description: 'Comprehensive application detail view with editing capabilities',
  },
  'application-forms': {
    name: 'Application Forms',
    component: 'ApplicationFormsSection',
    description: 'Application form components and flows',
  },
  'client-dashboard': {
    name: 'Client Dashboard',
    component: 'ClientDashboardSection',
    description: 'Client dashboard for applicants',
  },
  'example-section': {
    name: 'Example Section',
    component: 'ExampleSection',
    description: 'Example section demonstrating structure',
  },
  'login-forms': {
    name: 'Login Forms',
    component: 'LoginFormsSection',
    description: 'Authentication and login forms',
  },
  'management-pages-overview': {
    name: 'Management Pages Overview',
    component: 'ManagementPagesOverviewSection',
    description: 'Overview of all management pages',
  },
  'staff-dashboard': {
    name: 'Staff Dashboard',
    component: 'StaffDashboardSection',
    description: 'Staff dashboard for application review',
  },
} as const;

export type SectionName = keyof typeof SECTIONS;

/**
 * Get the style file path
 */
export function getStylePath(style: StyleName): string {
  return `${STYLES[style].path}/style.md`;
}

/**
 * Get the substyle file path
 */
export function getSubstylePath(style: StyleName, substyle: SubstyleName<typeof style>): string {
  return `${STYLES[style].path}/substyles/${substyle}.md`;
}

/**
 * Get the section file path
 */
export function getSectionPath(section: SectionName): string {
  return `sections/${section}.md`;
}

/**
 * Get the component name for a section
 */
export function getComponentName(section: SectionName): string {
  return SECTIONS[section].component;
}

/**
 * Get the output path for a generated component
 */
export function getComponentPath(section: SectionName): string {
  return `components/${getComponentName(section)}.tsx`;
}

/**
 * Get all context files for component generation
 */
export function getGenerationContext(
  style: StyleName,
  substyle: SubstyleName<typeof style>,
  section: SectionName
) {
  return {
    rules: 'rules/rendering-rules.md',
    style: getStylePath(style),
    substyle: getSubstylePath(style, substyle),
    section: getSectionPath(section),
    output: getComponentPath(section),
    componentName: getComponentName(section),
  };
}

/**
 * Generate the canonical prompt text
 */
export function generatePrompt(
  style: StyleName,
  substyle: SubstyleName<typeof style>,
  section: SectionName
): string {
  const context = getGenerationContext(style, substyle, section);
  
  return `You are generating a single React TypeScript component.

Context files:
- ${context.rules}
- ${context.style}
- ${context.substyle}

Source file:
- ${context.section}

Constraints:
- Follow implementation instructions exactly
- Do not invent tokens or UI elements
- Do not refactor beyond scope

Output:
- One TSX file: ${context.output}
- Component name: ${context.componentName}
- Default export only`;
}

/**
 * List all available style/substyle combinations
 */
export function getAllStyleCombinations(): Array<{
  style: StyleName;
  substyle: string;
  path: string;
}> {
  const combinations: Array<{
    style: StyleName;
    substyle: string;
    path: string;
  }> = [];

  for (const [styleKey, styleData] of Object.entries(STYLES)) {
    for (const substyle of styleData.substyles) {
      combinations.push({
        style: styleKey as StyleName,
        substyle,
        path: getSubstylePath(styleKey as StyleName, substyle as any),
      });
    }
  }

  return combinations;
}

/**
 * List all available sections
 */
export function getAllSections(): Array<{
  name: SectionName;
  component: string;
  description: string;
  path: string;
}> {
  return Object.entries(SECTIONS).map(([key, value]) => ({
    name: key as SectionName,
    component: value.component,
    description: value.description,
    path: getSectionPath(key as SectionName),
  }));
}

