/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_grid_g132",
  "version_tag": "0.1.2-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. Its functionality (responsive 2D layouts using a 12-column grid system) will be replaced by direct usage of Tailwind CSS grid utilities. Original description: A layout primitive for creating responsive 2D layouts using a 12-column grid system. It consists of Grid containers and Grid items. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by direct Tailwind CSS grid utilities to align with the shadcn/ui and Tailwind-first styling approach. Original purpose: To provide a flexible and standard way to structure page layouts and component compositions responsively, aligning with common grid system patterns. Based on the definition in cycle1_ui_primitives_definition_g131.md. Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of Tailwind CSS grid utilities.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "A `Grid` component can act as a `container` or an `item`.",
    "`container` grids manage the layout of `item` grids using flexbox.",
    "Supports `spacing` (gap) between grid items in a container.",
    "`item` grids can specify column spans for different breakpoints (`xs`, `sm`, `md`, `lg`, `xl`) - simplified implementation.",
    "Utilizes flexbox for its underlying implementation; responsive logic is basic and would need media queries for robustness."
  ],
  "interfaces_provided": [
    {
      "name": "Grid",
      "interface_type": "REACT_COMPONENT",
      "details": "Props: children, container, item, spacing, direction, alignItems, justifyContent, wrap, xs, sm, md, lg, xl, component, className, style",
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions. THIS COMPONENT IS BEING DEPRECATED."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system (for breakpoint definitions and spacing units) is highly recommended; current implementation is basic.", "type": "DESIGN_CONSIDERATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Grid primitive. Responsive styling based on breakpoints and theme-aware spacing to be implemented. Dependents updated at g139. Marked for DEPRECATION and migrated to TSX at g=160 as per plan_cycle0_mobile_styling_g150."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

// Placeholder for theme access or helper functions
const resolveSpacing = (spacingValue: string | number | undefined): string | undefined => {
  if (typeof spacingValue === 'number') {
    return `${spacingValue * 8}px`; // Assuming 8px grid, replace with theme.spacing(value)
  }
  return spacingValue as string | undefined;
};

// Placeholder for breakpoint definitions (e.g., from theme)
// const breakpoints = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };

type GridSize = boolean | number; // Number from 1 to 12, or true for auto

interface GridProps {
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  spacing?: string | number;
  direction?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  wrap?: React.CSSProperties['flexWrap'];
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  component?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

/**
 * Grid Component (Primitive)
 *
 * Purpose: Responsive 2D layout using a 12-column grid system.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(props, ref) {
  const {
    children,
    container = false,
    item = false,
    spacing = 0, // Spacing for container
    direction = 'row', // For container
    alignItems,    // For container
    justifyContent,// For container
    wrap = 'wrap', // For container
    xs, sm, md, lg, xl, // For items
    className = '',
    component: Component = 'div',
    style,
    ...otherProps
  } = props;

  const gridStyles: React.CSSProperties = { ...style };
  let gridItemClasses = '';

  if (container) {
    gridStyles.display = 'flex';
    gridStyles.flexDirection = direction;
    gridStyles.flexWrap = wrap;
    if (alignItems) gridStyles.alignItems = alignItems;
    if (justifyContent) gridStyles.justifyContent = justifyContent;

    const gapValue = resolveSpacing(spacing);
    gridStyles.gap = gapValue;
  }

  if (item) {
    gridStyles.flexGrow = 0; // Default for item, can be overridden by responsive props
    gridStyles.maxWidth = '100%'; // Default for item
    gridStyles.flexBasis = 'auto'; // Default for item

    const createItemStyles = (size: GridSize | undefined): Partial<React.CSSProperties> & { class?: string } => {
      if (size === true) { // Auto layout
        return { flexGrow: 1, flexBasis: '0%', maxWidth: '100%' }; // Changed flexBasis to 0%
      } if (typeof size === 'number' && size > 0 && size <= 12) {
        const percentage = (size / 12) * 100;
        return { flexGrow: 0, flexBasis: `${percentage}%`, maxWidth: `${percentage}%` };
      }
      return {};
    };

    let responsiveStyles: Partial<React.CSSProperties> & { class?: string } = {};
    let tempClasses: string[] = [];

    if (xs !== undefined) { 
      const s = createItemStyles(xs); 
      Object.assign(responsiveStyles, s); 
      if (s.class) tempClasses.push(s.class); 
      else if (xs === true) tempClasses.push('grid-xs-auto'); 
      else if (typeof xs === 'number') tempClasses.push(`grid-xs-${xs}`);
    }
    if (sm !== undefined) { 
      const s = createItemStyles(sm); 
      Object.assign(responsiveStyles, s); 
      if (s.class) tempClasses.push(s.class); 
      else if (sm === true) tempClasses.push('grid-sm-auto'); 
      else if (typeof sm === 'number') tempClasses.push(`grid-sm-${sm}`);
    }
    // Simplified: For a real app, these would be classes handled by CSS media queries.
    // The styles applied here directly would apply the largest specified breakpoint's styles.
    // For proper responsive behavior with inline styles, one would need to use window.matchMedia or similar.

    Object.assign(gridStyles, responsiveStyles);
    delete (gridStyles as any).class; // remove class from style object
    gridItemClasses = tempClasses.join(' ');
  }

  const gridClasses = `primitive-grid ${container ? 'grid-container' : ''} ${item ? 'grid-item' : ''} ${gridItemClasses} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <Component ref={ref} className={gridClasses} style={gridStyles} {...otherProps}>
      {children}
    </Component>
  );
});

export default Grid; 