/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_box_g132",
  "version_tag": "0.1.7-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. Its functionality (providing shorthand access to common CSS utility props for spacing, sizing, colors, flexbox) will be replaced by direct usage of Tailwind CSS utility classes on standard HTML elements (div, span, etc.). Original description: A fundamental layout primitive component, typically rendering a div, that provides shorthand access to common CSS utility props for spacing, sizing, colors, flexbox, and more. It facilitates quick and consistent styling for layout purposes. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by direct Tailwind CSS usage to align with the shadcn/ui and Tailwind-first styling approach for mobile responsiveness. Original purpose: To offer a versatile and theme-aware container for applying common styling properties directly as props, reducing the need for custom CSS for simple layout adjustments. Based on the definition in cycle1_ui_primitives_definition_g131.md. Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of Tailwind CSS utilities.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Renders as a `div` by default, but can be changed via the `component` prop.",
    "Accepts props for padding (p, px, py, pt, etc.) and margin (m, mx, my, mt, etc.).",
    "Supports props for width, height, min/maxWidth, min/maxHeight.",
    "Allows setting display, bgcolor (background color), color, border, borderRadius, and boxShadow.",
    "Supports common flexbox properties like flexDirection, alignItems, justifyContent, flexWrap, flexGrow, flexShrink, flexBasis."
  ],
  "interfaces_provided": [
    {
      "name": "Box",
      "interface_type": "REACT_COMPONENT",
      "details": "Props: children, component, p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml, width, height, display, bgcolor, color, border, borderRadius, boxShadow, flexDirection, alignItems, justifyContent, flexWrap, flexGrow, flexShrink, flexBasis, className, sx (for custom styles)",
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions. THIS COMPONENT IS BEING DEPRECATED."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system for consistent spacing/color units is highly recommended for full utility.", "type": "DESIGN_CONSIDERATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_comp_card_g112",
    "cycle0_comp_footer_g112",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": ["issue_flexdirection_prop_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Box primitive. Actual style transformation from props (especially theme-aware spacing/colors) to be implemented. Dependents updated at g139, g143, g146, g148, and g149. Marked for DEPRECATION at g=152 as per plan_cycle0_mobile_styling_g150 and analysis cycle0_shadcn_analysis_g151.md. To be replaced by Tailwind CSS. Migrated to TSX at g=158 (plan_jsx_to_tsx_g157), annotation updated at g=160."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

// Placeholder for a theme object or theme context
// const theme = {
//   spacing: (value) => `${value * 8}px`, // Example: theme.spacing(2) -> '16px'
//   palette: {
//     primary: { main: '#007bff', light: '#66b2ff' },
//     background: { paper: '#fff' }
//   },
//   shape: { borderRadius: '4px' },
//   shadows: ['none', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', /* ...more */ ],
// };

// Helper function to resolve theme values (simplified)
// In a real system, this would access the theme context.
const resolveThemeValue = (value: string | number | undefined, type: string): string | number | undefined => {
  if (typeof value === 'number' && type === 'spacing') {
    // return theme.spacing(value);
    return `${value * 8}px`; // Basic fallback if no theme
  }
  if (type === 'color' && value === 'primary.light') {
    // return theme.palette.primary.light;
    return '#66b2ff'; // Basic fallback
  }
  if (type === 'borderRadius') {
    // return theme.shape.borderRadius;
    return '4px';
  }
  if (type === 'boxShadow' && typeof value === 'number' && value >= 0 && value <=1) { // Assuming value is an index
    // return theme.shadows[value];
    return value === 1 ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : 'none';
  }
  return value; // Return as is if not a special theme key or number for spacing
};

/**
 * Box Component (Primitive)
 *
 * Purpose: A fundamental layout component for applying common CSS utility props directly.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */

interface BoxProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexGrow?: string | number;
  flexShrink?: string | number;
  flexBasis?: string | number;
  bgcolor?: string;
  color?: string;
  border?: string | number;
  borderColor?: string;
  borderRadius?: string | number;
  boxShadow?: string | number;
  className?: string;
  sx?: React.CSSProperties;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(function Box(props, ref) {
  const {
    children,
    component: Component = 'div',
    p, px, py, pt, pr, pb, pl,
    m, mx, my, mt, mr, mb, ml,
    width, height, minWidth, minHeight, maxWidth, maxHeight,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    bgcolor,
    color,
    border,
    borderColor,
    borderRadius,
    boxShadow,
    className = '',
    sx, // For more complex custom styles, potentially theme-aware
    style, // Standard style prop
    ...otherProps
  } = props;

  const boxStyles: React.CSSProperties = { ...style }; // Start with explicitly passed style prop

  // Spacing props (padding)
  if (p) { boxStyles.padding = resolveThemeValue(p, 'spacing') as string; }
  if (px) { boxStyles.paddingLeft = resolveThemeValue(px, 'spacing') as string; boxStyles.paddingRight = resolveThemeValue(px, 'spacing') as string; }
  if (py) { boxStyles.paddingTop = resolveThemeValue(py, 'spacing') as string; boxStyles.paddingBottom = resolveThemeValue(py, 'spacing') as string; }
  if (pt) { boxStyles.paddingTop = resolveThemeValue(pt, 'spacing') as string; }
  if (pr) { boxStyles.paddingRight = resolveThemeValue(pr, 'spacing') as string; }
  if (pb) { boxStyles.paddingBottom = resolveThemeValue(pb, 'spacing') as string; }
  if (pl) { boxStyles.paddingLeft = resolveThemeValue(pl, 'spacing') as string; }

  // Spacing props (margin)
  if (m) { boxStyles.margin = resolveThemeValue(m, 'spacing') as string; }
  if (mx) { boxStyles.marginLeft = resolveThemeValue(mx, 'spacing') as string; boxStyles.marginRight = resolveThemeValue(mx, 'spacing') as string; }
  if (my) { boxStyles.marginTop = resolveThemeValue(my, 'spacing') as string; boxStyles.marginBottom = resolveThemeValue(my, 'spacing') as string; }
  if (mt) { boxStyles.marginTop = resolveThemeValue(mt, 'spacing') as string; }
  if (mr) { boxStyles.marginRight = resolveThemeValue(mr, 'spacing') as string; }
  if (mb) { boxStyles.marginBottom = resolveThemeValue(mb, 'spacing') as string; }
  if (ml) { boxStyles.marginLeft = resolveThemeValue(ml, 'spacing') as string; }

  // Sizing props
  if (width) { boxStyles.width = width; }
  if (height) { boxStyles.height = height; }
  if (minWidth) { boxStyles.minWidth = minWidth; }
  if (minHeight) { boxStyles.minHeight = minHeight; }
  if (maxWidth) { boxStyles.maxWidth = maxWidth; }
  if (maxHeight) { boxStyles.maxHeight = maxHeight; }

  // Display prop
  if (display) { boxStyles.display = display; }

  // Flexbox props
  if (flexDirection) { boxStyles.flexDirection = flexDirection; }
  if (alignItems) { boxStyles.alignItems = alignItems; }
  if (justifyContent) { boxStyles.justifyContent = justifyContent; }
  if (flexWrap) { boxStyles.flexWrap = flexWrap; }
  if (flexGrow) { boxStyles.flexGrow = flexGrow; }
  if (flexShrink) { boxStyles.flexShrink = flexShrink; }
  if (flexBasis) { boxStyles.flexBasis = flexBasis; }

  // Color props
  if (bgcolor) { boxStyles.backgroundColor = resolveThemeValue(bgcolor, 'color') as string; }
  if (color) { boxStyles.color = resolveThemeValue(color, 'color') as string; }

  // Border props
  if (border) { boxStyles.border = typeof border === 'number' ? `${border}px solid` : border; }
  if (borderColor) { boxStyles.borderColor = resolveThemeValue(borderColor, 'color') as string; }
  if (borderRadius) { boxStyles.borderRadius = resolveThemeValue(borderRadius, 'borderRadius') as string; }

  // Shadow prop
  if (boxShadow !== undefined) { boxStyles.boxShadow = resolveThemeValue(boxShadow, 'boxShadow') as string; }

  // sx prop - for complex styles, potentially theme-aware (simplified here)
  if (sx) {
    Object.assign(boxStyles, sx);
  }

  const boxClasses = `primitive-box ${className}`.trim();

  return (
    <Component ref={ref} className={boxClasses} style={boxStyles} {...otherProps}>
      {children}
    </Component>
  );
});

export default Box; 