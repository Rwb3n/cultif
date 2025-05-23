/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_typography_g132",
  "version_tag": "0.1.9-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. Its functionality (rendering text with consistent styling options) will be replaced by direct usage of Tailwind CSS text utilities on standard HTML elements (p, h1-h6, span, etc.). Original description: A primitive UI component for rendering text with consistent styling options across the application. It standardizes font sizes, weights, colors, and common text behaviors. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by direct Tailwind CSS text utilities to align with the shadcn/ui and Tailwind-first styling approach. Original purpose: To provide a versatile and themeable text component that ensures visual consistency and simplifies the application of typographic styles, based on the definition in cycle1_ui_primitives_definition_g131.md. Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of Tailwind CSS text utilities.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Accepts a `variant` prop to determine semantic and stylistic role (e.g., h1, body1, caption) - basic styling implemented.",
    "Allows specifying the root HTML `component` to render as.",
    "Supports `color`, `fontWeight`, `textAlign`, and `display` props for common text styling - basic styling implemented.",
    "Handles text wrapping (`noWrap`) and truncation (`truncate`) - basic styling implemented.",
    "Provides options for `gutterBottom` and `paragraph` styling for spacing - basic styling implemented."
  ],
  "interfaces_provided": [
    {
      "name": "Typography",
      "interface_type": "REACT_COMPONENT",
      "details": "Props: children, variant, component, color, fontWeight, textAlign, display, noWrap, truncate, gutterBottom, paragraph, className, style",
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions and suggested values. THIS COMPONENT IS BEING DEPRECATED."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_comp_button_g112",
    "cycle0_comp_card_g112",
    "cycle0_comp_modal_g112",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Typography primitive. Actual styling and theme integration to be implemented. Dependents updated at g139, g142, g143, g144, g145, g146, g148, and g149. Marked for DEPRECATION and migrated to TSX at g=160 as per plan_cycle0_mobile_styling_g150."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

// Placeholder: Theme object or context for styling (e.g., colors, font sizes, spacing units)
// const theme = {
//   palette: {
//     primary: { main: '#007bff' },
//     secondary: { main: '#6c757d' },
//     textPrimary: 'rgba(0, 0, 0, 0.87)',
//     textSecondary: 'rgba(0, 0, 0, 0.60)',
//     error: { main: '#dc3545' },
//   },
//   typographyVariants: {
//     h1: { fontSize: '2.5rem', fontWeight: 'bold', component: 'h1' },
//     body1: { fontSize: '1rem', fontWeight: 'normal', component: 'p' },
//     // ... other variants
//   },
//   spacing: (factor) => `${factor * 8}px`,
// };

type TypographyVariant = | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'caption' | 'overline'
  | 'button' | 'link';

const variantMapping: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span',
  link: 'span',
};

interface TypographyProps {
  children?: React.ReactNode;
  variant?: TypographyVariant;
  component?: React.ElementType;
  color?: string; // Could be theme key or CSS color
  fontWeight?: React.CSSProperties['fontWeight'];
  textAlign?: React.CSSProperties['textAlign'];
  display?: React.CSSProperties['display'];
  noWrap?: boolean;
  truncate?: boolean | number; // true for single line, number for multi-line
  gutterBottom?: boolean;
  paragraph?: boolean;
  className?: string;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

/**
 * Typography Component (Primitive)
 *
 * Purpose: Standardized text rendering with various styling options.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(function Typography(props, ref) {
  const {
    children,
    variant = 'body1',
    component,
    color,
    fontWeight,
    textAlign,
    display,
    noWrap = false,
    truncate = false,
    gutterBottom = false,
    paragraph = false,
    className = '',
    style: styleProp, // Renamed to avoid conflict with internal styles variable
    ...otherProps
  } = props;

  const ComponentToRender = component || (paragraph ? 'p' : variantMapping[variant as TypographyVariant] || 'span');

  const styles: React.CSSProperties = {
    ...(variant === 'h1' && { fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5em 0' }),
    ...(variant === 'body1' && { fontSize: '1rem', lineHeight: '1.5' }),
    ...(variant === 'caption' && { fontSize: '0.75rem', color: 'gray' }),

    ...(color === 'primary' && { color: 'blue' }),
    ...(color === 'textSecondary' && { color: 'grey' }),
    ...(color && !['primary', 'textSecondary'].includes(color) && { color: color }),

    ...(fontWeight && { fontWeight }),
    ...(textAlign && { textAlign }),
    ...(display && { display }),
    ...(noWrap && { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }),
    ...(truncate === true && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }),
    ...(typeof truncate === 'number' && {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: truncate,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
    ...(gutterBottom && { marginBottom: '0.35em' }),
    ...(paragraph && { marginBottom: '1em' }),
  };

  const combinedStyles = { ...styles, ...styleProp };

  const typographyClasses = `primitive-typography typography-variant-${variant} ${className}`.trim();

  return (
    <ComponentToRender ref={ref} className={typographyClasses} style={combinedStyles} {...otherProps}>
      {children}
    </ComponentToRender>
  );
});

export default Typography; 